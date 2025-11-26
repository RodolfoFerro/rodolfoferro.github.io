"""Genetic Algorithm to generate Sudoku solutions."""

from termcolor import colored
import numpy as np


class GeneticSudoku:

    def __init__(self, initial_state=None):
        """Constructor of the class.

        Parameters
        ----------
        initial_state : np.array
            An optiional array containing the initial state.
        """

        self.initial_state = None
        self.mask = None
        self.population_size = None

        # If initial an state is provided, generate and display it
        if initial_state is not None:
            self.set_initial_state(initial_state)

            print("[INFO] Initial state:")
            self.display_sudoku(initial_state)

    def display_sudoku(self, state):
        """Display a Sudoku grid properly formatted.

        Parameters
        ----------
        state : np.array
            The array of size 81 to be displayed as a Sudoku grid.
        """

        # Reshape state into a grid
        grid = state.reshape(9, 9)
        fixed = self.initial_state.reshape(9, 9)

        print("+-------+-------+-------+")
        for i, row in enumerate(grid):
            line = "| "
            for j, val in enumerate(row):
                if val == 0:
                    cell = colored(".", "red")
                elif fixed[i, j] != 0:
                    cell = colored(str(val), "white", attrs=["bold"])
                else:
                    cell = colored(str(val), "green")
                line += cell + (" | " if (j + 1) % 3 == 0 else " ")
            print(line)
            if (i + 1) % 3 == 0:
                print("+-------+-------+-------+")

    def print_generation_info(self,
                              generation,
                              best_fitness,
                              best_chromosome,
                              state=True):
        """Print information of generation.

        Parameters
        ----------
        generation : int
        best_fitness : int
        best_chromosome : np.array
        state : bool
        """

        print(f"[INFO] 🌀 Generation: {generation:4d}")
        print(f"[INFO] 📉 Best fitness: {best_fitness:2d}")

        if state:
            print("[INFO] 🧬 Best chromosome:")
            self.display_sudoku(best_chromosome)
            print()
        print()

    def set_initial_state(self, initial_state):
        """Function to set the initial state.

        Parameters
        ----------
        initial_state : np.array
            An optiional array containing the initial state.
        """

        self.initial_state = np.array(initial_state).flatten()
        self.mask = self.build_mask()

    def build_mask(self):
        """Function to build a mask from the initial state.

        This mask is used to operate with chromosome elements as matrices
        without affecting the initial status.

        Returns
        -------
        mask : np.array
            An array with the mask.
        """

        # Convert 0 values to 1 and mask initial state as 0
        mask = (self.initial_state == 0).astype(int)

        return mask

    def initialize_population(self):
        """Function to initialize the population.

        Returns
        -------
        pupulation : np.array
            An array with the initial population.
        """

        # Build a random population
        population = np.random.randint(1,
                                       10,
                                       size=(self.population_size, 81),
                                       dtype=int)

        # Set initial values of generated population as fixed using the mask
        population = population * self.mask + self.initial_state

        return population

    def fitness(self, population):
        """Compute the fitness function.

        Parameters
        ----------
        population : np.array
            Array with the population.

        Returns
        -------
        fitness_scores : np.array
            An array with the fitness function evaluated on each individual
            (chromosome) of the population.
        """

        individuals = population.reshape((self.population_size, 9, 9))
        fitness_scores = []

        for chromosome in individuals:
            fitness = 0

            # Count duplicates in rows and columns
            fitness += sum(9 - len(set(row)) for row in chromosome)
            fitness += sum(9 - len(set(col)) for col in chromosome.T)

            # Count duplicates in 3x3 blocks
            fitness += sum(9 - len(set(chromosome[i:i + 3, j:j + 3].flatten()))
                           for i in range(0, 9, 3) for j in range(0, 9, 3))

            fitness_scores.append(fitness)

        # Convert to np.array
        fitness_scores = np.array(fitness_scores)

        return fitness_scores

    def selection(self, population, population_fitness, selection_rate=0.1):
        """Function to perform the selection with elitism.

        Parameters
        ----------
        population : np.array
            Array with the population.
        population_fitness : np.array
            Array with the fitness of each individual in the population.
        selection_rate : float, optional
            Percentage of the population to be selected, by default 10%.

        Returns
        -------
        selected_individuals : np.array
            An array with top percentage elements from population.
        """

        # Sort the population and cut according to cut percentage
        cut = int(self.population_size * selection_rate)
        elite_idx = np.argsort(population_fitness)[:cut]
        selected_individuals = population[elite_idx]

        return selected_individuals

    def crossover(self, selected_individuals, include_parents=False):
        """Function to perform the crossover operation.

        Parameters
        ----------
        selected_individuals : np.array
            Array with the selected individuals.

        Returns
        -------
        offspring : np.array
            An array with the offspring of the parent chromosomes.
        """

        # Set NumPy's random generator
        rng = np.random.default_rng()

        # Set initial offspring
        number_of_children = self.population_size
        offspring = []

        # If parents are included in new generation
        if include_parents:
            number_of_parents = len(selected_individuals)
            number_of_children -= number_of_parents
            offspring = [*selected_individuals]

        # Generate offspring
        for _ in range(number_of_children):
            p1, p2 = rng.choice(selected_individuals, size=2, replace=False)
            cross_point = rng.integers(1, 81)
            child = np.concatenate([p1[:cross_point], p2[cross_point:]])
            offspring.append(child)

        # Convert to np.array
        offspring = np.array(offspring)

        return offspring

    def mutation(self, offspring, mutation_rate=0.1):
        """Function to perform the mutation operation.

        Parameters
        ----------
        offspring : np.array
            Array with the offspring.
        mutation_rate : float
            Mutation rate.
        """

        # Set NumPy's random generator
        rng = np.random.default_rng()
        mutated = offspring.copy()

        # Indices able to be mutated (elements from intial state are excluded)
        mutable_idx = np.where(self.mask == 1)[0]

        # Generate a mask (indices) of random mutations
        mutation_mask = rng.random(mutated[:,
                                           mutable_idx].shape) < mutation_rate

        # Asign new random values based in mutation mask
        random_values = rng.integers(1, 10, size=mutated[:, mutable_idx].shape)
        mutated[:, mutable_idx][mutation_mask] = random_values[mutation_mask]

        # Convert to np.array
        mutated_offspring = np.array(mutated)

        return mutated_offspring

    def evolve(self,
               population_size=10000,
               max_generations=1000,
               selection_rate=0.1,
               mutation_rate=0.1,
               include_parents=False,
               verbose=True,
               state=True):
        """Run the genetic algorithm until a valid Sudoku solution is found or
        max generations is reached.


        Parameters
        ----------
        population_size : int
            The number of individuals per population. The default value
            is 10000.
        max_generations : int
            Maximum number of generations to run the algorithm. The default
            value is 1000.
        selection_rate : float
            Percentage of population selected as parents (elitism).
        mutation_rate : float
            Probability of mutation for mutable positions.
        verbose : bool
            Whether to print intermediate results in terminal.
        state : bool
            Whether to display the best state in terminal.
        """

        self.population_size = population_size
        population = self.initialize_population()

        for generation in range(1, max_generations + 1):
            # Compute fitness and get best chromosome of generation
            fitness_scores = self.fitness(population)
            best_idx = np.argmin(fitness_scores)
            best_fitness = fitness_scores[best_idx]
            best_chromosome = population[best_idx].reshape((9, 9))

            # Display info of evolution
            if verbose:
                self.print_generation_info(generation, best_fitness,
                                           best_chromosome, state)

            # If the solution is found, stop the loop and display result
            if best_fitness == 0:
                if verbose:
                    print(f"[INFO] 🎉 Solution found in gen. {generation}!")
                    self.display_sudoku(best_chromosome)
                return best_chromosome

            # Genetic operations (selection → crossover → mutation)
            selected_individuals = self.selection(population, fitness_scores,
                                                  selection_rate)
            offspring = self.crossover(selected_individuals, include_parents)
            population = self.mutation(offspring, mutation_rate)

            # Diversification of population
            new_rnd_pop = self.initialize_population()
            p = int(self.population_size * 0.05)
            population[-p:] = new_rnd_pop[:p]

        # If solution is not found
        if verbose:
            print("\n[WARN] ⚠️ No solution found within generation limit.")
            print("[INFO] 🚧 Best solution found:")
            self.display_sudoku(best_chromosome)

        return best_chromosome


if __name__ == "__main__":
    # Usage example
    initial_state = np.array([[0, 0, 0, 8, 0, 0, 0, 3, 0],
                              [8, 0, 0, 0, 9, 0, 2, 0, 6],
                              [4, 7, 0, 0, 0, 5, 0, 0, 1],
                              [6, 0, 5, 1, 2, 3, 7, 4, 9],
                              [0, 0, 0, 5, 8, 0, 0, 0, 0],
                              [0, 1, 9, 0, 4, 6, 3, 0, 8],
                              [1, 9, 0, 0, 3, 8, 5, 2, 0],
                              [0, 4, 0, 0, 5, 1, 8, 6, 0],
                              [0, 0, 0, 0, 0, 0, 0, 0, 3]])

    sudoku = GeneticSudoku(initial_state)
    solution = sudoku.evolve(population_size=10000,
                             max_generations=100,
                             selection_rate=0.6,
                             mutation_rate=0.3,
                             include_parents=False,
                             verbose=True,
                             state=True)
