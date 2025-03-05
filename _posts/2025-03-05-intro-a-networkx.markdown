---
title: "Introducción a NetworkX"
layout: post
date: 2025-03-05 10:00
published: true
image: 
headerImage: false
tag:
- Python
- NetworkX
- Graphs
category: blog
author: rodferro
description: "Introcucción a grafos en Python con NetworkX"
---

<html lang="en">
<head><meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Introducción_a_NetworkX</title><script src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.1.10/require.min.js"></script>
<style type="text/css">
    pre { line-height: 125%; }
td.linenos .normal { color: inherit; background-color: transparent; padding-left: 5px; padding-right: 5px; }
span.linenos { color: inherit; background-color: transparent; padding-left: 5px; padding-right: 5px; }
td.linenos .special { color: #000000; background-color: #ffffc0; padding-left: 5px; padding-right: 5px; }
span.linenos.special { color: #000000; background-color: #ffffc0; padding-left: 5px; padding-right: 5px; }
.highlight .hll { background-color: var(--jp-cell-editor-active-background) }
.highlight { background: var(--jp-cell-editor-background); color: var(--jp-mirror-editor-variable-color) }
.highlight .c { color: var(--jp-mirror-editor-comment-color); font-style: italic } /* Comment */
.highlight .err { color: var(--jp-mirror-editor-error-color) } /* Error */
.highlight .k { color: var(--jp-mirror-editor-keyword-color); font-weight: bold } /* Keyword */
.highlight .o { color: var(--jp-mirror-editor-operator-color); font-weight: bold } /* Operator */
.highlight .p { color: var(--jp-mirror-editor-punctuation-color) } /* Punctuation */
.highlight .ch { color: var(--jp-mirror-editor-comment-color); font-style: italic } /* Comment.Hashbang */
.highlight .cm { color: var(--jp-mirror-editor-comment-color); font-style: italic } /* Comment.Multiline */
.highlight .cp { color: var(--jp-mirror-editor-comment-color); font-style: italic } /* Comment.Preproc */
.highlight .cpf { color: var(--jp-mirror-editor-comment-color); font-style: italic } /* Comment.PreprocFile */
.highlight .c1 { color: var(--jp-mirror-editor-comment-color); font-style: italic } /* Comment.Single */
.highlight .cs { color: var(--jp-mirror-editor-comment-color); font-style: italic } /* Comment.Special */
.highlight .kc { color: var(--jp-mirror-editor-keyword-color); font-weight: bold } /* Keyword.Constant */
.highlight .kd { color: var(--jp-mirror-editor-keyword-color); font-weight: bold } /* Keyword.Declaration */
.highlight .kn { color: var(--jp-mirror-editor-keyword-color); font-weight: bold } /* Keyword.Namespace */
.highlight .kp { color: var(--jp-mirror-editor-keyword-color); font-weight: bold } /* Keyword.Pseudo */
.highlight .kr { color: var(--jp-mirror-editor-keyword-color); font-weight: bold } /* Keyword.Reserved */
.highlight .kt { color: var(--jp-mirror-editor-keyword-color); font-weight: bold } /* Keyword.Type */
.highlight .m { color: var(--jp-mirror-editor-number-color) } /* Literal.Number */
.highlight .s { color: var(--jp-mirror-editor-string-color) } /* Literal.String */
.highlight .ow { color: var(--jp-mirror-editor-operator-color); font-weight: bold } /* Operator.Word */
.highlight .pm { color: var(--jp-mirror-editor-punctuation-color) } /* Punctuation.Marker */
.highlight .w { color: var(--jp-mirror-editor-variable-color) } /* Text.Whitespace */
.highlight .mb { color: var(--jp-mirror-editor-number-color) } /* Literal.Number.Bin */
.highlight .mf { color: var(--jp-mirror-editor-number-color) } /* Literal.Number.Float */
.highlight .mh { color: var(--jp-mirror-editor-number-color) } /* Literal.Number.Hex */
.highlight .mi { color: var(--jp-mirror-editor-number-color) } /* Literal.Number.Integer */
.highlight .mo { color: var(--jp-mirror-editor-number-color) } /* Literal.Number.Oct */
.highlight .sa { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Affix */
.highlight .sb { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Backtick */
.highlight .sc { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Char */
.highlight .dl { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Delimiter */
.highlight .sd { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Doc */
.highlight .s2 { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Double */
.highlight .se { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Escape */
.highlight .sh { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Heredoc */
.highlight .si { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Interpol */
.highlight .sx { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Other */
.highlight .sr { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Regex */
.highlight .s1 { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Single */
.highlight .ss { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Symbol */
.highlight .il { color: var(--jp-mirror-editor-number-color) } /* Literal.Number.Integer.Long */
  </style>
<style type="text/css">
/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*
 * Mozilla scrollbar styling
 */

/* use standard opaque scrollbars for most nodes */
[data-jp-theme-scrollbars='true'] {
  scrollbar-color: rgb(var(--jp-scrollbar-thumb-color))
    var(--jp-scrollbar-background-color);
}

/* for code nodes, use a transparent style of scrollbar. These selectors
 * will match lower in the tree, and so will override the above */
[data-jp-theme-scrollbars='true'] .CodeMirror-hscrollbar,
[data-jp-theme-scrollbars='true'] .CodeMirror-vscrollbar {
  scrollbar-color: rgba(var(--jp-scrollbar-thumb-color), 0.5) transparent;
}

/* tiny scrollbar */

.jp-scrollbar-tiny {
  scrollbar-color: rgba(var(--jp-scrollbar-thumb-color), 0.5) transparent;
  scrollbar-width: thin;
}

/* tiny scrollbar */

.jp-scrollbar-tiny::-webkit-scrollbar,
.jp-scrollbar-tiny::-webkit-scrollbar-corner {
  background-color: transparent;
  height: 4px;
  width: 4px;
}

.jp-scrollbar-tiny::-webkit-scrollbar-thumb {
  background: rgba(var(--jp-scrollbar-thumb-color), 0.5);
}

.jp-scrollbar-tiny::-webkit-scrollbar-track:horizontal {
  border-left: 0 solid transparent;
  border-right: 0 solid transparent;
}

.jp-scrollbar-tiny::-webkit-scrollbar-track:vertical {
  border-top: 0 solid transparent;
  border-bottom: 0 solid transparent;
}

/*
 * Lumino
 */

.lm-ScrollBar[data-orientation='horizontal'] {
  min-height: 16px;
  max-height: 16px;
  min-width: 45px;
  border-top: 1px solid #a0a0a0;
}

.lm-ScrollBar[data-orientation='vertical'] {
  min-width: 16px;
  max-width: 16px;
  min-height: 45px;
  border-left: 1px solid #a0a0a0;
}

.lm-ScrollBar-button {
  background-color: #f0f0f0;
  background-position: center center;
  min-height: 15px;
  max-height: 15px;
  min-width: 15px;
  max-width: 15px;
}

.lm-ScrollBar-button:hover {
  background-color: #dadada;
}

.lm-ScrollBar-button.lm-mod-active {
  background-color: #cdcdcd;
}

.lm-ScrollBar-track {
  background: #f0f0f0;
}

.lm-ScrollBar-thumb {
  background: #cdcdcd;
}

.lm-ScrollBar-thumb:hover {
  background: #bababa;
}

.lm-ScrollBar-thumb.lm-mod-active {
  background: #a0a0a0;
}

.lm-ScrollBar[data-orientation='horizontal'] .lm-ScrollBar-thumb {
  height: 100%;
  min-width: 15px;
  border-left: 1px solid #a0a0a0;
  border-right: 1px solid #a0a0a0;
}

.lm-ScrollBar[data-orientation='vertical'] .lm-ScrollBar-thumb {
  width: 100%;
  min-height: 15px;
  border-top: 1px solid #a0a0a0;
  border-bottom: 1px solid #a0a0a0;
}

.lm-ScrollBar[data-orientation='horizontal']
  .lm-ScrollBar-button[data-action='decrement'] {
  background-image: var(--jp-icon-caret-left);
  background-size: 17px;
}

.lm-ScrollBar[data-orientation='horizontal']
  .lm-ScrollBar-button[data-action='increment'] {
  background-image: var(--jp-icon-caret-right);
  background-size: 17px;
}

.lm-ScrollBar[data-orientation='vertical']
  .lm-ScrollBar-button[data-action='decrement'] {
  background-image: var(--jp-icon-caret-up);
  background-size: 17px;
}

.lm-ScrollBar[data-orientation='vertical']
  .lm-ScrollBar-button[data-action='increment'] {
  background-image: var(--jp-icon-caret-down);
  background-size: 17px;
}

/*
 * Copyright (c) Jupyter Development Team.
 * Distributed under the terms of the Modified BSD License.
 */

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/

.lm-Widget {
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
}

.lm-Widget.lm-mod-hidden {
  display: none !important;
}

/*
 * Copyright (c) Jupyter Development Team.
 * Distributed under the terms of the Modified BSD License.
 */

.lm-AccordionPanel[data-orientation='horizontal'] > .lm-AccordionPanel-title {
  /* Title is rotated for horizontal accordion panel using CSS */
  display: block;
  transform-origin: top left;
  transform: rotate(-90deg) translate(-100%);
}

/*
 * Copyright (c) Jupyter Development Team.
 * Distributed under the terms of the Modified BSD License.
 */

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/

.lm-CommandPalette {
  display: flex;
  flex-direction: column;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.lm-CommandPalette-search {
  flex: 0 0 auto;
}

.lm-CommandPalette-content {
  flex: 1 1 auto;
  margin: 0;
  padding: 0;
  min-height: 0;
  overflow: auto;
  list-style-type: none;
}

.lm-CommandPalette-header {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.lm-CommandPalette-item {
  display: flex;
  flex-direction: row;
}

.lm-CommandPalette-itemIcon {
  flex: 0 0 auto;
}

.lm-CommandPalette-itemContent {
  flex: 1 1 auto;
  overflow: hidden;
}

.lm-CommandPalette-itemShortcut {
  flex: 0 0 auto;
}

.lm-CommandPalette-itemLabel {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.lm-close-icon {
  border: 1px solid transparent;
  background-color: transparent;
  position: absolute;
  z-index: 1;
  right: 3%;
  top: 0;
  bottom: 0;
  margin: auto;
  padding: 7px 0;
  display: none;
  vertical-align: middle;
  outline: 0;
  cursor: pointer;
}
.lm-close-icon:after {
  content: 'X';
  display: block;
  width: 15px;
  height: 15px;
  text-align: center;
  color: #000;
  font-weight: normal;
  font-size: 12px;
  cursor: pointer;
}

/*
 * Copyright (c) Jupyter Development Team.
 * Distributed under the terms of the Modified BSD License.
 */

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/

.lm-DockPanel {
  z-index: 0;
}

.lm-DockPanel-widget {
  z-index: 0;
}

.lm-DockPanel-tabBar {
  z-index: 1;
}

.lm-DockPanel-handle {
  z-index: 2;
}

.lm-DockPanel-handle.lm-mod-hidden {
  display: none !important;
}

.lm-DockPanel-handle:after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: '';
}

.lm-DockPanel-handle[data-orientation='horizontal'] {
  cursor: ew-resize;
}

.lm-DockPanel-handle[data-orientation='vertical'] {
  cursor: ns-resize;
}

.lm-DockPanel-handle[data-orientation='horizontal']:after {
  left: 50%;
  min-width: 8px;
  transform: translateX(-50%);
}

.lm-DockPanel-handle[data-orientation='vertical']:after {
  top: 50%;
  min-height: 8px;
  transform: translateY(-50%);
}

.lm-DockPanel-overlay {
  z-index: 3;
  box-sizing: border-box;
  pointer-events: none;
}

.lm-DockPanel-overlay.lm-mod-hidden {
  display: none !important;
}

/*
 * Copyright (c) Jupyter Development Team.
 * Distributed under the terms of the Modified BSD License.
 */

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/

.lm-Menu {
  z-index: 10000;
  position: absolute;
  white-space: nowrap;
  overflow-x: hidden;
  overflow-y: auto;
  outline: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.lm-Menu-content {
  margin: 0;
  padding: 0;
  display: table;
  list-style-type: none;
}

.lm-Menu-item {
  display: table-row;
}

.lm-Menu-item.lm-mod-hidden,
.lm-Menu-item.lm-mod-collapsed {
  display: none !important;
}

.lm-Menu-itemIcon,
.lm-Menu-itemSubmenuIcon {
  display: table-cell;
  text-align: center;
}

.lm-Menu-itemLabel {
  display: table-cell;
  text-align: left;
}

.lm-Menu-itemShortcut {
  display: table-cell;
  text-align: right;
}

/*
 * Copyright (c) Jupyter Development Team.
 * Distributed under the terms of the Modified BSD License.
 */

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/

.lm-MenuBar {
  outline: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.lm-MenuBar-content {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  list-style-type: none;
}

.lm-MenuBar-item {
  box-sizing: border-box;
}

.lm-MenuBar-itemIcon,
.lm-MenuBar-itemLabel {
  display: inline-block;
}

/*
 * Copyright (c) Jupyter Development Team.
 * Distributed under the terms of the Modified BSD License.
 */

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/

.lm-ScrollBar {
  display: flex;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.lm-ScrollBar[data-orientation='horizontal'] {
  flex-direction: row;
}

.lm-ScrollBar[data-orientation='vertical'] {
  flex-direction: column;
}

.lm-ScrollBar-button {
  box-sizing: border-box;
  flex: 0 0 auto;
}

.lm-ScrollBar-track {
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  flex: 1 1 auto;
}

.lm-ScrollBar-thumb {
  box-sizing: border-box;
  position: absolute;
}

/*
 * Copyright (c) Jupyter Development Team.
 * Distributed under the terms of the Modified BSD License.
 */

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/

.lm-SplitPanel-child {
  z-index: 0;
}

.lm-SplitPanel-handle {
  z-index: 1;
}

.lm-SplitPanel-handle.lm-mod-hidden {
  display: none !important;
}

.lm-SplitPanel-handle:after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: '';
}

.lm-SplitPanel[data-orientation='horizontal'] > .lm-SplitPanel-handle {
  cursor: ew-resize;
}

.lm-SplitPanel[data-orientation='vertical'] > .lm-SplitPanel-handle {
  cursor: ns-resize;
}

.lm-SplitPanel[data-orientation='horizontal'] > .lm-SplitPanel-handle:after {
  left: 50%;
  min-width: 8px;
  transform: translateX(-50%);
}

.lm-SplitPanel[data-orientation='vertical'] > .lm-SplitPanel-handle:after {
  top: 50%;
  min-height: 8px;
  transform: translateY(-50%);
}

/*
 * Copyright (c) Jupyter Development Team.
 * Distributed under the terms of the Modified BSD License.
 */

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/

.lm-TabBar {
  display: flex;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.lm-TabBar[data-orientation='horizontal'] {
  flex-direction: row;
  align-items: flex-end;
}

.lm-TabBar[data-orientation='vertical'] {
  flex-direction: column;
  align-items: flex-end;
}

.lm-TabBar-content {
  margin: 0;
  padding: 0;
  display: flex;
  flex: 1 1 auto;
  list-style-type: none;
}

.lm-TabBar[data-orientation='horizontal'] > .lm-TabBar-content {
  flex-direction: row;
}

.lm-TabBar[data-orientation='vertical'] > .lm-TabBar-content {
  flex-direction: column;
}

.lm-TabBar-tab {
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  overflow: hidden;
  touch-action: none; /* Disable native Drag/Drop */
}

.lm-TabBar-tabIcon,
.lm-TabBar-tabCloseIcon {
  flex: 0 0 auto;
}

.lm-TabBar-tabLabel {
  flex: 1 1 auto;
  overflow: hidden;
  white-space: nowrap;
}

.lm-TabBar-tabInput {
  user-select: all;
  width: 100%;
  box-sizing: border-box;
}

.lm-TabBar-tab.lm-mod-hidden {
  display: none !important;
}

.lm-TabBar-addButton.lm-mod-hidden {
  display: none !important;
}

.lm-TabBar.lm-mod-dragging .lm-TabBar-tab {
  position: relative;
}

.lm-TabBar.lm-mod-dragging[data-orientation='horizontal'] .lm-TabBar-tab {
  left: 0;
  transition: left 150ms ease;
}

.lm-TabBar.lm-mod-dragging[data-orientation='vertical'] .lm-TabBar-tab {
  top: 0;
  transition: top 150ms ease;
}

.lm-TabBar.lm-mod-dragging .lm-TabBar-tab.lm-mod-dragging {
  transition: none;
}

.lm-TabBar-tabLabel .lm-TabBar-tabInput {
  user-select: all;
  width: 100%;
  box-sizing: border-box;
  background: inherit;
}

/*
 * Copyright (c) Jupyter Development Team.
 * Distributed under the terms of the Modified BSD License.
 */

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/

.lm-TabPanel-tabBar {
  z-index: 1;
}

.lm-TabPanel-stackedPanel {
  z-index: 0;
}

/*
 * Copyright (c) Jupyter Development Team.
 * Distributed under the terms of the Modified BSD License.
 */

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-Collapse {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.jp-Collapse-header {
  padding: 1px 12px;
  background-color: var(--jp-layout-color1);
  border-bottom: solid var(--jp-border-width) var(--jp-border-color2);
  color: var(--jp-ui-font-color1);
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: var(--jp-ui-font-size0);
  font-weight: 600;
  text-transform: uppercase;
  user-select: none;
}

.jp-Collapser-icon {
  height: 16px;
}

.jp-Collapse-header-collapsed .jp-Collapser-icon {
  transform: rotate(-90deg);
  margin: auto 0;
}

.jp-Collapser-title {
  line-height: 25px;
}

.jp-Collapse-contents {
  padding: 0 12px;
  background-color: var(--jp-layout-color1);
  color: var(--jp-ui-font-color1);
  overflow: auto;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/* This file was auto-generated by ensureUiComponents() in @jupyterlab/buildutils */

/**
 * (DEPRECATED) Support for consuming icons as CSS background images
 */

/* Icons urls */

:root {
  --jp-icon-add-above: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzEzN18xOTQ5MikiPgo8cGF0aCBjbGFzcz0ianAtaWNvbjMiIGQ9Ik00Ljc1IDQuOTMwNjZINi42MjVWNi44MDU2NkM2LjYyNSA3LjAxMTkxIDYuNzkzNzUgNy4xODA2NiA3IDcuMTgwNjZDNy4yMDYyNSA3LjE4MDY2IDcuMzc1IDcuMDExOTEgNy4zNzUgNi44MDU2NlY0LjkzMDY2SDkuMjVDOS40NTYyNSA0LjkzMDY2IDkuNjI1IDQuNzYxOTEgOS42MjUgNC41NTU2NkM5LjYyNSA0LjM0OTQxIDkuNDU2MjUgNC4xODA2NiA5LjI1IDQuMTgwNjZINy4zNzVWMi4zMDU2NkM3LjM3NSAyLjA5OTQxIDcuMjA2MjUgMS45MzA2NiA3IDEuOTMwNjZDNi43OTM3NSAxLjkzMDY2IDYuNjI1IDIuMDk5NDEgNi42MjUgMi4zMDU2NlY0LjE4MDY2SDQuNzVDNC41NDM3NSA0LjE4MDY2IDQuMzc1IDQuMzQ5NDEgNC4zNzUgNC41NTU2NkM0LjM3NSA0Ljc2MTkxIDQuNTQzNzUgNC45MzA2NiA0Ljc1IDQuOTMwNjZaIiBmaWxsPSIjNjE2MTYxIiBzdHJva2U9IiM2MTYxNjEiIHN0cm9rZS13aWR0aD0iMC43Ii8+CjwvZz4KPHBhdGggY2xhc3M9ImpwLWljb24zIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjUgOS41VjExLjVMMi41IDExLjVWOS41TDExLjUgOS41Wk0xMiA4QzEyLjU1MjMgOCAxMyA4LjQ0NzcyIDEzIDlWMTJDMTMgMTIuNTUyMyAxMi41NTIzIDEzIDEyIDEzTDIgMTNDMS40NDc3MiAxMyAxIDEyLjU1MjMgMSAxMlY5QzEgOC40NDc3MiAxLjQ0NzcxIDggMiA4TDEyIDhaIiBmaWxsPSIjNjE2MTYxIi8+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzEzN18xOTQ5MiI+CjxyZWN0IGNsYXNzPSJqcC1pY29uMyIgd2lkdGg9IjYiIGhlaWdodD0iNiIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0ibWF0cml4KC0xIDAgMCAxIDEwIDEuNTU1NjYpIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==);
  --jp-icon-add-below: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzEzN18xOTQ5OCkiPgo8cGF0aCBjbGFzcz0ianAtaWNvbjMiIGQ9Ik05LjI1IDEwLjA2OTNMNy4zNzUgMTAuMDY5M0w3LjM3NSA4LjE5NDM0QzcuMzc1IDcuOTg4MDkgNy4yMDYyNSA3LjgxOTM0IDcgNy44MTkzNEM2Ljc5Mzc1IDcuODE5MzQgNi42MjUgNy45ODgwOSA2LjYyNSA4LjE5NDM0TDYuNjI1IDEwLjA2OTNMNC43NSAxMC4wNjkzQzQuNTQzNzUgMTAuMDY5MyA0LjM3NSAxMC4yMzgxIDQuMzc1IDEwLjQ0NDNDNC4zNzUgMTAuNjUwNiA0LjU0Mzc1IDEwLjgxOTMgNC43NSAxMC44MTkzTDYuNjI1IDEwLjgxOTNMNi42MjUgMTIuNjk0M0M2LjYyNSAxMi45MDA2IDYuNzkzNzUgMTMuMDY5MyA3IDEzLjA2OTNDNy4yMDYyNSAxMy4wNjkzIDcuMzc1IDEyLjkwMDYgNy4zNzUgMTIuNjk0M0w3LjM3NSAxMC44MTkzTDkuMjUgMTAuODE5M0M5LjQ1NjI1IDEwLjgxOTMgOS42MjUgMTAuNjUwNiA5LjYyNSAxMC40NDQzQzkuNjI1IDEwLjIzODEgOS40NTYyNSAxMC4wNjkzIDkuMjUgMTAuMDY5M1oiIGZpbGw9IiM2MTYxNjEiIHN0cm9rZT0iIzYxNjE2MSIgc3Ryb2tlLXdpZHRoPSIwLjciLz4KPC9nPgo8cGF0aCBjbGFzcz0ianAtaWNvbjMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMi41IDUuNUwyLjUgMy41TDExLjUgMy41TDExLjUgNS41TDIuNSA1LjVaTTIgN0MxLjQ0NzcyIDcgMSA2LjU1MjI4IDEgNkwxIDNDMSAyLjQ0NzcyIDEuNDQ3NzIgMiAyIDJMMTIgMkMxMi41NTIzIDIgMTMgMi40NDc3MiAxMyAzTDEzIDZDMTMgNi41NTIyOSAxMi41NTIzIDcgMTIgN0wyIDdaIiBmaWxsPSIjNjE2MTYxIi8+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzEzN18xOTQ5OCI+CjxyZWN0IGNsYXNzPSJqcC1pY29uMyIgd2lkdGg9IjYiIGhlaWdodD0iNiIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0ibWF0cml4KDEgMS43NDg0NmUtMDcgMS43NDg0NmUtMDcgLTEgNCAxMy40NDQzKSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=);
  --jp-icon-add: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTE5IDEzaC02djZoLTJ2LTZINXYtMmg2VjVoMnY2aDZ2MnoiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-bell: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDE2IDE2IiB2ZXJzaW9uPSIxLjEiPgogICA8cGF0aCBjbGFzcz0ianAtaWNvbjIganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjMzMzMzMzIgogICAgICBkPSJtOCAwLjI5Yy0xLjQgMC0yLjcgMC43My0zLjYgMS44LTEuMiAxLjUtMS40IDMuNC0xLjUgNS4yLTAuMTggMi4yLTAuNDQgNC0yLjMgNS4zbDAuMjggMS4zaDVjMC4wMjYgMC42NiAwLjMyIDEuMSAwLjcxIDEuNSAwLjg0IDAuNjEgMiAwLjYxIDIuOCAwIDAuNTItMC40IDAuNi0xIDAuNzEtMS41aDVsMC4yOC0xLjNjLTEuOS0wLjk3LTIuMi0zLjMtMi4zLTUuMy0wLjEzLTEuOC0wLjI2LTMuNy0xLjUtNS4yLTAuODUtMS0yLjItMS44LTMuNi0xLjh6bTAgMS40YzAuODggMCAxLjkgMC41NSAyLjUgMS4zIDAuODggMS4xIDEuMSAyLjcgMS4yIDQuNCAwLjEzIDEuNyAwLjIzIDMuNiAxLjMgNS4yaC0xMGMxLjEtMS42IDEuMi0zLjQgMS4zLTUuMiAwLjEzLTEuNyAwLjMtMy4zIDEuMi00LjQgMC41OS0wLjcyIDEuNi0xLjMgMi41LTEuM3ptLTAuNzQgMTJoMS41Yy0wLjAwMTUgMC4yOCAwLjAxNSAwLjc5LTAuNzQgMC43OS0wLjczIDAuMDAxNi0wLjcyLTAuNTMtMC43NC0wLjc5eiIgLz4KPC9zdmc+Cg==);
  --jp-icon-bug-dot: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyBqcC1pY29uLXNlbGVjdGFibGUiIGZpbGw9IiM2MTYxNjEiPgogICAgICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTcuMTkgOEgyMFYxMEgxNy45MUMxNy45NiAxMC4zMyAxOCAxMC42NiAxOCAxMVYxMkgyMFYxNEgxOC41SDE4VjE0LjAyNzVDMTUuNzUgMTQuMjc2MiAxNCAxNi4xODM3IDE0IDE4LjVDMTQgMTkuMjA4IDE0LjE2MzUgMTkuODc3OSAxNC40NTQ5IDIwLjQ3MzlDMTMuNzA2MyAyMC44MTE3IDEyLjg3NTcgMjEgMTIgMjFDOS43OCAyMSA3Ljg1IDE5Ljc5IDYuODEgMThINFYxNkg2LjA5QzYuMDQgMTUuNjcgNiAxNS4zNCA2IDE1VjE0SDRWMTJINlYxMUM2IDEwLjY2IDYuMDQgMTAuMzMgNi4wOSAxMEg0VjhINi44MUM3LjI2IDcuMjIgNy44OCA2LjU1IDguNjIgNi4wNEw3IDQuNDFMOC40MSAzTDEwLjU5IDUuMTdDMTEuMDQgNS4wNiAxMS41MSA1IDEyIDVDMTIuNDkgNSAxMi45NiA1LjA2IDEzLjQyIDUuMTdMMTUuNTkgM0wxNyA0LjQxTDE1LjM3IDYuMDRDMTYuMTIgNi41NSAxNi43NCA3LjIyIDE3LjE5IDhaTTEwIDE2SDE0VjE0SDEwVjE2Wk0xMCAxMkgxNFYxMEgxMFYxMloiIGZpbGw9IiM2MTYxNjEiLz4KICAgICAgICA8cGF0aCBkPSJNMjIgMTguNUMyMiAyMC40MzMgMjAuNDMzIDIyIDE4LjUgMjJDMTYuNTY3IDIyIDE1IDIwLjQzMyAxNSAxOC41QzE1IDE2LjU2NyAxNi41NjcgMTUgMTguNSAxNUMyMC40MzMgMTUgMjIgMTYuNTY3IDIyIDE4LjVaIiBmaWxsPSIjNjE2MTYxIi8+CiAgICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-bug: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIj4KICAgIDxwYXRoIGQ9Ik0yMCA4aC0yLjgxYy0uNDUtLjc4LTEuMDctMS40NS0xLjgyLTEuOTZMMTcgNC40MSAxNS41OSAzbC0yLjE3IDIuMTdDMTIuOTYgNS4wNiAxMi40OSA1IDEyIDVjLS40OSAwLS45Ni4wNi0xLjQxLjE3TDguNDEgMyA3IDQuNDFsMS42MiAxLjYzQzcuODggNi41NSA3LjI2IDcuMjIgNi44MSA4SDR2MmgyLjA5Yy0uMDUuMzMtLjA5LjY2LS4wOSAxdjFINHYyaDJ2MWMwIC4zNC4wNC42Ny4wOSAxSDR2MmgyLjgxYzEuMDQgMS43OSAyLjk3IDMgNS4xOSAzczQuMTUtMS4yMSA1LjE5LTNIMjB2LTJoLTIuMDljLjA1LS4zMy4wOS0uNjYuMDktMXYtMWgydi0yaC0ydi0xYzAtLjM0LS4wNC0uNjctLjA5LTFIMjBWOHptLTYgOGgtNHYtMmg0djJ6bTAtNGgtNHYtMmg0djJ6Ii8+CiAgPC9nPgo8L3N2Zz4K);
  --jp-icon-build: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTE0LjkgMTcuNDVDMTYuMjUgMTcuNDUgMTcuMzUgMTYuMzUgMTcuMzUgMTVDMTcuMzUgMTMuNjUgMTYuMjUgMTIuNTUgMTQuOSAxMi41NUMxMy41NCAxMi41NSAxMi40NSAxMy42NSAxMi40NSAxNUMxMi40NSAxNi4zNSAxMy41NCAxNy40NSAxNC45IDE3LjQ1Wk0yMC4xIDE1LjY4TDIxLjU4IDE2Ljg0QzIxLjcxIDE2Ljk1IDIxLjc1IDE3LjEzIDIxLjY2IDE3LjI5TDIwLjI2IDE5LjcxQzIwLjE3IDE5Ljg2IDIwIDE5LjkyIDE5LjgzIDE5Ljg2TDE4LjA5IDE5LjE2QzE3LjczIDE5LjQ0IDE3LjMzIDE5LjY3IDE2LjkxIDE5Ljg1TDE2LjY0IDIxLjdDMTYuNjIgMjEuODcgMTYuNDcgMjIgMTYuMyAyMkgxMy41QzEzLjMyIDIyIDEzLjE4IDIxLjg3IDEzLjE1IDIxLjdMMTIuODkgMTkuODVDMTIuNDYgMTkuNjcgMTIuMDcgMTkuNDQgMTEuNzEgMTkuMTZMOS45NjAwMiAxOS44NkM5LjgxMDAyIDE5LjkyIDkuNjIwMDIgMTkuODYgOS41NDAwMiAxOS43MUw4LjE0MDAyIDE3LjI5QzguMDUwMDIgMTcuMTMgOC4wOTAwMiAxNi45NSA4LjIyMDAyIDE2Ljg0TDkuNzAwMDIgMTUuNjhMOS42NTAwMSAxNUw5LjcwMDAyIDE0LjMxTDguMjIwMDIgMTMuMTZDOC4wOTAwMiAxMy4wNSA4LjA1MDAyIDEyLjg2IDguMTQwMDIgMTIuNzFMOS41NDAwMiAxMC4yOUM5LjYyMDAyIDEwLjEzIDkuODEwMDIgMTAuMDcgOS45NjAwMiAxMC4xM0wxMS43MSAxMC44NEMxMi4wNyAxMC41NiAxMi40NiAxMC4zMiAxMi44OSAxMC4xNUwxMy4xNSA4LjI4OTk4QzEzLjE4IDguMTI5OTggMTMuMzIgNy45OTk5OCAxMy41IDcuOTk5OThIMTYuM0MxNi40NyA3Ljk5OTk4IDE2LjYyIDguMTI5OTggMTYuNjQgOC4yODk5OEwxNi45MSAxMC4xNUMxNy4zMyAxMC4zMiAxNy43MyAxMC41NiAxOC4wOSAxMC44NEwxOS44MyAxMC4xM0MyMCAxMC4wNyAyMC4xNyAxMC4xMyAyMC4yNiAxMC4yOUwyMS42NiAxMi43MUMyMS43NSAxMi44NiAyMS43MSAxMy4wNSAyMS41OCAxMy4xNkwyMC4xIDE0LjMxTDIwLjE1IDE1TDIwLjEgMTUuNjhaIi8+CiAgICA8cGF0aCBkPSJNNy4zMjk2NiA3LjQ0NDU0QzguMDgzMSA3LjAwOTU0IDguMzM5MzIgNi4wNTMzMiA3LjkwNDMyIDUuMjk5ODhDNy40NjkzMiA0LjU0NjQzIDYuNTA4MSA0LjI4MTU2IDUuNzU0NjYgNC43MTY1NkM1LjM5MTc2IDQuOTI2MDggNS4xMjY5NSA1LjI3MTE4IDUuMDE4NDkgNS42NzU5NEM0LjkxMDA0IDYuMDgwNzEgNC45NjY4MiA2LjUxMTk4IDUuMTc2MzQgNi44NzQ4OEM1LjYxMTM0IDcuNjI4MzIgNi41NzYyMiA3Ljg3OTU0IDcuMzI5NjYgNy40NDQ1NFpNOS42NTcxOCA0Ljc5NTkzTDEwLjg2NzIgNC45NTE3OUMxMC45NjI4IDQuOTc3NDEgMTEuMDQwMiA1LjA3MTMzIDExLjAzODIgNS4xODc5M0wxMS4wMzg4IDYuOTg4OTNDMTEuMDQ1NSA3LjEwMDU0IDEwLjk2MTYgNy4xOTUxOCAxMC44NTUgNy4yMTA1NEw5LjY2MDAxIDcuMzgwODNMOS4yMzkxNSA4LjEzMTg4TDkuNjY5NjEgOS4yNTc0NUM5LjcwNzI5IDkuMzYyNzEgOS42NjkzNCA5LjQ3Njk5IDkuNTc0MDggOS41MzE5OUw4LjAxNTIzIDEwLjQzMkM3LjkxMTMxIDEwLjQ5MiA3Ljc5MzM3IDEwLjQ2NzcgNy43MjEwNSAxMC4zODI0TDYuOTg3NDggOS40MzE4OEw2LjEwOTMxIDkuNDMwODNMNS4zNDcwNCAxMC4zOTA1QzUuMjg5MDkgMTAuNDcwMiA1LjE3MzgzIDEwLjQ5MDUgNS4wNzE4NyAxMC40MzM5TDMuNTEyNDUgOS41MzI5M0MzLjQxMDQ5IDkuNDc2MzMgMy4zNzY0NyA5LjM1NzQxIDMuNDEwNzUgOS4yNTY3OUwzLjg2MzQ3IDguMTQwOTNMMy42MTc0OSA3Ljc3NDg4TDMuNDIzNDcgNy4zNzg4M0wyLjIzMDc1IDcuMjEyOTdDMi4xMjY0NyA3LjE5MjM1IDIuMDQwNDkgNy4xMDM0MiAyLjA0MjQ1IDYuOTg2ODJMMi4wNDE4NyA1LjE4NTgyQzIuMDQzODMgNS4wNjkyMiAyLjExOTA5IDQuOTc5NTggMi4yMTcwNCA0Ljk2OTIyTDMuNDIwNjUgNC43OTM5M0wzLjg2NzQ5IDQuMDI3ODhMMy40MTEwNSAyLjkxNzMxQzMuMzczMzcgMi44MTIwNCAzLjQxMTMxIDIuNjk3NzYgMy41MTUyMyAyLjYzNzc2TDUuMDc0MDggMS43Mzc3NkM1LjE2OTM0IDEuNjgyNzYgNS4yODcyOSAxLjcwNzA0IDUuMzU5NjEgMS43OTIzMUw2LjExOTE1IDIuNzI3ODhMNi45ODAwMSAyLjczODkzTDcuNzI0OTYgMS43ODkyMkM3Ljc5MTU2IDEuNzA0NTggNy45MTU0OCAxLjY3OTIyIDguMDA4NzkgMS43NDA4Mkw5LjU2ODIxIDIuNjQxODJDOS42NzAxNyAyLjY5ODQyIDkuNzEyODUgMi44MTIzNCA5LjY4NzIzIDIuOTA3OTdMOS4yMTcxOCA0LjAzMzgzTDkuNDYzMTYgNC4zOTk4OEw5LjY1NzE4IDQuNzk1OTNaIi8+CiAgPC9nPgo8L3N2Zz4K);
  --jp-icon-caret-down-empty-thin: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIwIDIwIj4KCTxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iPgoJCTxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iOS45LDEzLjYgMy42LDcuNCA0LjQsNi42IDkuOSwxMi4yIDE1LjQsNi43IDE2LjEsNy40ICIvPgoJPC9nPgo8L3N2Zz4K);
  --jp-icon-caret-down-empty: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiIHNoYXBlLXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIj4KICAgIDxwYXRoIGQ9Ik01LjIsNS45TDksOS43bDMuOC0zLjhsMS4yLDEuMmwtNC45LDVsLTQuOS01TDUuMiw1Ljl6Ii8+CiAgPC9nPgo8L3N2Zz4K);
  --jp-icon-caret-down: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiIHNoYXBlLXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIj4KICAgIDxwYXRoIGQ9Ik01LjIsNy41TDksMTEuMmwzLjgtMy44SDUuMnoiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-caret-left: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDE4IDE4Ij4KCTxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iPgoJCTxwYXRoIGQ9Ik0xMC44LDEyLjhMNy4xLDlsMy44LTMuOGwwLDcuNkgxMC44eiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-caret-right: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiIHNoYXBlLXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIj4KICAgIDxwYXRoIGQ9Ik03LjIsNS4yTDEwLjksOWwtMy44LDMuOFY1LjJINy4yeiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-caret-up-empty-thin: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIwIDIwIj4KCTxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iPgoJCTxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMTUuNCwxMy4zIDkuOSw3LjcgNC40LDEzLjIgMy42LDEyLjUgOS45LDYuMyAxNi4xLDEyLjYgIi8+Cgk8L2c+Cjwvc3ZnPgo=);
  --jp-icon-caret-up: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDE4IDE4Ij4KCTxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iPgoJCTxwYXRoIGQ9Ik01LjIsMTAuNUw5LDYuOGwzLjgsMy44SDUuMnoiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-case-sensitive: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIwIDIwIj4KICA8ZyBjbGFzcz0ianAtaWNvbjIiIGZpbGw9IiM0MTQxNDEiPgogICAgPHJlY3QgeD0iMiIgeT0iMiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ii8+CiAgPC9nPgogIDxnIGNsYXNzPSJqcC1pY29uLWFjY2VudDIiIGZpbGw9IiNGRkYiPgogICAgPHBhdGggZD0iTTcuNiw4aDAuOWwzLjUsOGgtMS4xTDEwLDE0SDZsLTAuOSwySDRMNy42LDh6IE04LDkuMUw2LjQsMTNoMy4yTDgsOS4xeiIvPgogICAgPHBhdGggZD0iTTE2LjYsOS44Yy0wLjIsMC4xLTAuNCwwLjEtMC43LDAuMWMtMC4yLDAtMC40LTAuMS0wLjYtMC4yYy0wLjEtMC4xLTAuMi0wLjQtMC4yLTAuNyBjLTAuMywwLjMtMC42LDAuNS0wLjksMC43Yy0wLjMsMC4xLTAuNywwLjItMS4xLDAuMmMtMC4zLDAtMC41LDAtMC43LTAuMWMtMC4yLTAuMS0wLjQtMC4yLTAuNi0wLjNjLTAuMi0wLjEtMC4zLTAuMy0wLjQtMC41IGMtMC4xLTAuMi0wLjEtMC40LTAuMS0wLjdjMC0wLjMsMC4xLTAuNiwwLjItMC44YzAuMS0wLjIsMC4zLTAuNCwwLjQtMC41QzEyLDcsMTIuMiw2LjksMTIuNSw2LjhjMC4yLTAuMSwwLjUtMC4xLDAuNy0wLjIgYzAuMy0wLjEsMC41LTAuMSwwLjctMC4xYzAuMiwwLDAuNC0wLjEsMC42LTAuMWMwLjIsMCwwLjMtMC4xLDAuNC0wLjJjMC4xLTAuMSwwLjItMC4yLDAuMi0wLjRjMC0xLTEuMS0xLTEuMy0xIGMtMC40LDAtMS40LDAtMS40LDEuMmgtMC45YzAtMC40LDAuMS0wLjcsMC4yLTFjMC4xLTAuMiwwLjMtMC40LDAuNS0wLjZjMC4yLTAuMiwwLjUtMC4zLDAuOC0wLjNDMTMuMyw0LDEzLjYsNCwxMy45LDQgYzAuMywwLDAuNSwwLDAuOCwwLjFjMC4zLDAsMC41LDAuMSwwLjcsMC4yYzAuMiwwLjEsMC40LDAuMywwLjUsMC41QzE2LDUsMTYsNS4yLDE2LDUuNnYyLjljMCwwLjIsMCwwLjQsMCwwLjUgYzAsMC4xLDAuMSwwLjIsMC4zLDAuMmMwLjEsMCwwLjIsMCwwLjMsMFY5Ljh6IE0xNS4yLDYuOWMtMS4yLDAuNi0zLjEsMC4yLTMuMSwxLjRjMCwxLjQsMy4xLDEsMy4xLTAuNVY2Ljl6Ii8+CiAgPC9nPgo8L3N2Zz4K);
  --jp-icon-check: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIj4KICAgIDxwYXRoIGQ9Ik05IDE2LjE3TDQuODMgMTJsLTEuNDIgMS40MUw5IDE5IDIxIDdsLTEuNDEtMS40MXoiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-circle-empty: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTEyIDJDNi40NyAyIDIgNi40NyAyIDEyczQuNDcgMTAgMTAgMTAgMTAtNC40NyAxMC0xMFMxNy41MyAyIDEyIDJ6bTAgMThjLTQuNDEgMC04LTMuNTktOC04czMuNTktOCA4LTggOCAzLjU5IDggOC0zLjU5IDgtOCA4eiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-circle: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTggMTgiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPGNpcmNsZSBjeD0iOSIgY3k9IjkiIHI9IjgiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-clear: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8bWFzayBpZD0iZG9udXRIb2xlIj4KICAgIDxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0id2hpdGUiIC8+CiAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSI4IiBmaWxsPSJibGFjayIvPgogIDwvbWFzaz4KCiAgPGcgY2xhc3M9ImpwLWljb24zIiBmaWxsPSIjNjE2MTYxIj4KICAgIDxyZWN0IGhlaWdodD0iMTgiIHdpZHRoPSIyIiB4PSIxMSIgeT0iMyIgdHJhbnNmb3JtPSJyb3RhdGUoMzE1LCAxMiwgMTIpIi8+CiAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgbWFzaz0idXJsKCNkb251dEhvbGUpIi8+CiAgPC9nPgo8L3N2Zz4K);
  --jp-icon-close: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbi1ub25lIGpwLWljb24tc2VsZWN0YWJsZS1pbnZlcnNlIGpwLWljb24zLWhvdmVyIiBmaWxsPSJub25lIj4KICAgIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjExIi8+CiAgPC9nPgoKICA8ZyBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIGpwLWljb24tYWNjZW50Mi1ob3ZlciIgZmlsbD0iIzYxNjE2MSI+CiAgICA8cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyeiIvPgogIDwvZz4KCiAgPGcgY2xhc3M9ImpwLWljb24tbm9uZSBqcC1pY29uLWJ1c3kiIGZpbGw9Im5vbmUiPgogICAgPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iNyIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-code-check: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiI+CiAgICA8cGF0aCBkPSJNNi41OSwzLjQxTDIsOEw2LjU5LDEyLjZMOCwxMS4xOEw0LjgyLDhMOCw0LjgyTDYuNTksMy40MU0xMi40MSwzLjQxTDExLDQuODJMMTQuMTgsOEwxMSwxMS4xOEwxMi40MSwxMi42TDE3LDhMMTIuNDEsMy40MU0yMS41OSwxMS41OUwxMy41LDE5LjY4TDkuODMsMTZMOC40MiwxNy40MUwxMy41LDIyLjVMMjMsMTNMMjEuNTksMTEuNTlaIiAvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-code: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyOCAyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CgkJPHBhdGggZD0iTTExLjQgMTguNkw2LjggMTRMMTEuNCA5LjRMMTAgOEw0IDE0TDEwIDIwTDExLjQgMTguNlpNMTYuNiAxOC42TDIxLjIgMTRMMTYuNiA5LjRMMTggOEwyNCAxNEwxOCAyMEwxNi42IDE4LjZWMTguNloiLz4KCTwvZz4KPC9zdmc+Cg==);
  --jp-icon-collapse-all: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGgKICAgICAgICAgICAgZD0iTTggMmMxIDAgMTEgMCAxMiAwczIgMSAyIDJjMCAxIDAgMTEgMCAxMnMwIDItMiAyQzIwIDE0IDIwIDQgMjAgNFMxMCA0IDYgNGMwLTIgMS0yIDItMnoiIC8+CiAgICAgICAgPHBhdGgKICAgICAgICAgICAgZD0iTTE4IDhjMC0xLTEtMi0yLTJTNSA2IDQgNnMtMiAxLTIgMmMwIDEgMCAxMSAwIDEyczEgMiAyIDJjMSAwIDExIDAgMTIgMHMyLTEgMi0yYzAtMSAwLTExIDAtMTJ6bS0yIDB2MTJINFY4eiIgLz4KICAgICAgICA8cGF0aCBkPSJNNiAxM3YyaDh2LTJ6IiAvPgogICAgPC9nPgo8L3N2Zz4K);
  --jp-icon-console: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIwMCAyMDAiPgogIDxnIGNsYXNzPSJqcC1jb25zb2xlLWljb24tYmFja2dyb3VuZC1jb2xvciBqcC1pY29uLXNlbGVjdGFibGUiIGZpbGw9IiMwMjg4RDEiPgogICAgPHBhdGggZD0iTTIwIDE5LjhoMTYwdjE1OS45SDIweiIvPgogIDwvZz4KICA8ZyBjbGFzcz0ianAtY29uc29sZS1pY29uLWNvbG9yIGpwLWljb24tc2VsZWN0YWJsZS1pbnZlcnNlIiBmaWxsPSIjZmZmIj4KICAgIDxwYXRoIGQ9Ik0xMDUgMTI3LjNoNDB2MTIuOGgtNDB6TTUxLjEgNzdMNzQgOTkuOWwtMjMuMyAyMy4zIDEwLjUgMTAuNSAyMy4zLTIzLjNMOTUgOTkuOSA4NC41IDg5LjQgNjEuNiA2Ni41eiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-copy: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTggMTgiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTExLjksMUgzLjJDMi40LDEsMS43LDEuNywxLjcsMi41djEwLjJoMS41VjIuNWg4LjdWMXogTTE0LjEsMy45aC04Yy0wLjgsMC0xLjUsMC43LTEuNSwxLjV2MTAuMmMwLDAuOCwwLjcsMS41LDEuNSwxLjVoOCBjMC44LDAsMS41LTAuNywxLjUtMS41VjUuNEMxNS41LDQuNiwxNC45LDMuOSwxNC4xLDMuOXogTTE0LjEsMTUuNWgtOFY1LjRoOFYxNS41eiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-copyright: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCI+CiAgPGcgY2xhc3M9ImpwLWljb24zIiBmaWxsPSIjNjE2MTYxIj4KICAgIDxwYXRoIGQ9Ik0xMS44OCw5LjE0YzEuMjgsMC4wNiwxLjYxLDEuMTUsMS42MywxLjY2aDEuNzljLTAuMDgtMS45OC0xLjQ5LTMuMTktMy40NS0zLjE5QzkuNjQsNy42MSw4LDksOCwxMi4xNCBjMCwxLjk0LDAuOTMsNC4yNCwzLjg0LDQuMjRjMi4yMiwwLDMuNDEtMS42NSwzLjQ0LTIuOTVoLTEuNzljLTAuMDMsMC41OS0wLjQ1LDEuMzgtMS42MywxLjQ0QzEwLjU1LDE0LjgzLDEwLDEzLjgxLDEwLDEyLjE0IEMxMCw5LjI1LDExLjI4LDkuMTYsMTEuODgsOS4xNHogTTEyLDJDNi40OCwyLDIsNi40OCwyLDEyczQuNDgsMTAsMTAsMTBzMTAtNC40OCwxMC0xMFMxNy41MiwyLDEyLDJ6IE0xMiwyMGMtNC40MSwwLTgtMy41OS04LTggczMuNTktOCw4LThzOCwzLjU5LDgsOFMxNi40MSwyMCwxMiwyMHoiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-cut: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTkuNjQgNy42NGMuMjMtLjUuMzYtMS4wNS4zNi0xLjY0IDAtMi4yMS0xLjc5LTQtNC00UzIgMy43OSAyIDZzMS43OSA0IDQgNGMuNTkgMCAxLjE0LS4xMyAxLjY0LS4zNkwxMCAxMmwtMi4zNiAyLjM2QzcuMTQgMTQuMTMgNi41OSAxNCA2IDE0Yy0yLjIxIDAtNCAxLjc5LTQgNHMxLjc5IDQgNCA0IDQtMS43OSA0LTRjMC0uNTktLjEzLTEuMTQtLjM2LTEuNjRMMTIgMTRsNyA3aDN2LTFMOS42NCA3LjY0ek02IDhjLTEuMSAwLTItLjg5LTItMnMuOS0yIDItMiAyIC44OSAyIDItLjkgMi0yIDJ6bTAgMTJjLTEuMSAwLTItLjg5LTItMnMuOS0yIDItMiAyIC44OSAyIDItLjkgMi0yIDJ6bTYtNy41Yy0uMjggMC0uNS0uMjItLjUtLjVzLjIyLS41LjUtLjUuNS4yMi41LjUtLjIyLjUtLjUuNXpNMTkgM2wtNiA2IDIgMiA3LTdWM3oiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-delete: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCI+CiAgICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIiAvPgogICAgPHBhdGggY2xhc3M9ImpwLWljb24zIiBmaWxsPSIjNjI2MjYyIiBkPSJNNiAxOWMwIDEuMS45IDIgMiAyaDhjMS4xIDAgMi0uOSAyLTJWN0g2djEyek0xOSA0aC0zLjVsLTEtMWgtNWwtMSAxSDV2MmgxNFY0eiIgLz4KPC9zdmc+Cg==);
  --jp-icon-download: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTE5IDloLTRWM0g5djZINWw3IDcgNy03ek01IDE4djJoMTR2LTJINXoiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-duplicate: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggY2xhc3M9ImpwLWljb24zIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIuNzk5OTggMC44NzVIOC44OTU4MkM5LjIwMDYxIDAuODc1IDkuNDQ5OTggMS4xMzkxNCA5LjQ0OTk4IDEuNDYxOThDOS40NDk5OCAxLjc4NDgyIDkuMjAwNjEgMi4wNDg5NiA4Ljg5NTgyIDIuMDQ4OTZIMy4zNTQxNUMzLjA0OTM2IDIuMDQ4OTYgMi43OTk5OCAyLjMxMzEgMi43OTk5OCAyLjYzNTk0VjkuNjc5NjlDMi43OTk5OCAxMC4wMDI1IDIuNTUwNjEgMTAuMjY2NyAyLjI0NTgyIDEwLjI2NjdDMS45NDEwMyAxMC4yNjY3IDEuNjkxNjUgMTAuMDAyNSAxLjY5MTY1IDkuNjc5NjlWMi4wNDg5NkMxLjY5MTY1IDEuNDAzMjggMi4xOTA0IDAuODc1IDIuNzk5OTggMC44NzVaTTUuMzY2NjUgMTEuOVY0LjU1SDExLjA4MzNWMTEuOUg1LjM2NjY1Wk00LjE0MTY1IDQuMTQxNjdDNC4xNDE2NSAzLjY5MDYzIDQuNTA3MjggMy4zMjUgNC45NTgzMiAzLjMyNUgxMS40OTE3QzExLjk0MjcgMy4zMjUgMTIuMzA4MyAzLjY5MDYzIDEyLjMwODMgNC4xNDE2N1YxMi4zMDgzQzEyLjMwODMgMTIuNzU5NCAxMS45NDI3IDEzLjEyNSAxMS40OTE3IDEzLjEyNUg0Ljk1ODMyQzQuNTA3MjggMTMuMTI1IDQuMTQxNjUgMTIuNzU5NCA0LjE0MTY1IDEyLjMwODNWNC4xNDE2N1oiIGZpbGw9IiM2MTYxNjEiLz4KPHBhdGggY2xhc3M9ImpwLWljb24zIiBkPSJNOS40MzU3NCA4LjI2NTA3SDguMzY0MzFWOS4zMzY1QzguMzY0MzEgOS40NTQzNSA4LjI2Nzg4IDkuNTUwNzggOC4xNTAwMiA5LjU1MDc4QzguMDMyMTcgOS41NTA3OCA3LjkzNTc0IDkuNDU0MzUgNy45MzU3NCA5LjMzNjVWOC4yNjUwN0g2Ljg2NDMxQzYuNzQ2NDUgOC4yNjUwNyA2LjY1MDAyIDguMTY4NjQgNi42NTAwMiA4LjA1MDc4QzYuNjUwMDIgNy45MzI5MiA2Ljc0NjQ1IDcuODM2NSA2Ljg2NDMxIDcuODM2NUg3LjkzNTc0VjYuNzY1MDdDNy45MzU3NCA2LjY0NzIxIDguMDMyMTcgNi41NTA3OCA4LjE1MDAyIDYuNTUwNzhDOC4yNjc4OCA2LjU1MDc4IDguMzY0MzEgNi42NDcyMSA4LjM2NDMxIDYuNzY1MDdWNy44MzY1SDkuNDM1NzRDOS41NTM2IDcuODM2NSA5LjY1MDAyIDcuOTMyOTIgOS42NTAwMiA4LjA1MDc4QzkuNjUwMDIgOC4xNjg2NCA5LjU1MzYgOC4yNjUwNyA5LjQzNTc0IDguMjY1MDdaIiBmaWxsPSIjNjE2MTYxIiBzdHJva2U9IiM2MTYxNjEiIHN0cm9rZS13aWR0aD0iMC41Ii8+Cjwvc3ZnPgo=);
  --jp-icon-edit: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTMgMTcuMjVWMjFoMy43NUwxNy44MSA5Ljk0bC0zLjc1LTMuNzVMMyAxNy4yNXpNMjAuNzEgNy4wNGMuMzktLjM5LjM5LTEuMDIgMC0xLjQxbC0yLjM0LTIuMzRjLS4zOS0uMzktMS4wMi0uMzktMS40MSAwbC0xLjgzIDEuODMgMy43NSAzLjc1IDEuODMtMS44M3oiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-ellipses: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPGNpcmNsZSBjeD0iNSIgY3k9IjEyIiByPSIyIi8+CiAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIyIi8+CiAgICA8Y2lyY2xlIGN4PSIxOSIgY3k9IjEyIiByPSIyIi8+CiAgPC9nPgo8L3N2Zz4K);
  --jp-icon-error: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KPGcgY2xhc3M9ImpwLWljb24zIiBmaWxsPSIjNjE2MTYxIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjE5IiByPSIyIi8+PHBhdGggZD0iTTEwIDNoNHYxMmgtNHoiLz48L2c+CjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KPC9zdmc+Cg==);
  --jp-icon-expand-all: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGgKICAgICAgICAgICAgZD0iTTggMmMxIDAgMTEgMCAxMiAwczIgMSAyIDJjMCAxIDAgMTEgMCAxMnMwIDItMiAyQzIwIDE0IDIwIDQgMjAgNFMxMCA0IDYgNGMwLTIgMS0yIDItMnoiIC8+CiAgICAgICAgPHBhdGgKICAgICAgICAgICAgZD0iTTE4IDhjMC0xLTEtMi0yLTJTNSA2IDQgNnMtMiAxLTIgMmMwIDEgMCAxMSAwIDEyczEgMiAyIDJjMSAwIDExIDAgMTIgMHMyLTEgMi0yYzAtMSAwLTExIDAtMTJ6bS0yIDB2MTJINFY4eiIgLz4KICAgICAgICA8cGF0aCBkPSJNMTEgMTBIOXYzSDZ2MmgzdjNoMnYtM2gzdi0yaC0zeiIgLz4KICAgIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-extension: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTIwLjUgMTFIMTlWN2MwLTEuMS0uOS0yLTItMmgtNFYzLjVDMTMgMi4xMiAxMS44OCAxIDEwLjUgMVM4IDIuMTIgOCAzLjVWNUg0Yy0xLjEgMC0xLjk5LjktMS45OSAydjMuOEgzLjVjMS40OSAwIDIuNyAxLjIxIDIuNyAyLjdzLTEuMjEgMi43LTIuNyAyLjdIMlYyMGMwIDEuMS45IDIgMiAyaDMuOHYtMS41YzAtMS40OSAxLjIxLTIuNyAyLjctMi43IDEuNDkgMCAyLjcgMS4yMSAyLjcgMi43VjIySDE3YzEuMSAwIDItLjkgMi0ydi00aDEuNWMxLjM4IDAgMi41LTEuMTIgMi41LTIuNVMyMS44OCAxMSAyMC41IDExeiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-fast-forward: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTQgMThsOC41LTZMNCA2djEyem05LTEydjEybDguNS02TDEzIDZ6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-file-upload: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTkgMTZoNnYtNmg0bC03LTctNyA3aDR6bS00IDJoMTR2Mkg1eiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-file: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8cGF0aCBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIiBkPSJNMTkuMyA4LjJsLTUuNS01LjVjLS4zLS4zLS43LS41LTEuMi0uNUgzLjljLS44LjEtMS42LjktMS42IDEuOHYxNC4xYzAgLjkuNyAxLjYgMS42IDEuNmgxNC4yYy45IDAgMS42LS43IDEuNi0xLjZWOS40Yy4xLS41LS4xLS45LS40LTEuMnptLTUuOC0zLjNsMy40IDMuNmgtMy40VjQuOXptMy45IDEyLjdINC43Yy0uMSAwLS4yIDAtLjItLjJWNC43YzAtLjIuMS0uMy4yLS4zaDcuMnY0LjRzMCAuOC4zIDEuMWMuMy4zIDEuMS4zIDEuMS4zaDQuM3Y3LjJzLS4xLjItLjIuMnoiLz4KPC9zdmc+Cg==);
  --jp-icon-filter-dot: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiNGRkYiPgogICAgPHBhdGggZD0iTTE0LDEyVjE5Ljg4QzE0LjA0LDIwLjE4IDEzLjk0LDIwLjUgMTMuNzEsMjAuNzFDMTMuMzIsMjEuMSAxMi42OSwyMS4xIDEyLjMsMjAuNzFMMTAuMjksMTguN0MxMC4wNiwxOC40NyA5Ljk2LDE4LjE2IDEwLDE3Ljg3VjEySDkuOTdMNC4yMSw0LjYyQzMuODcsNC4xOSAzLjk1LDMuNTYgNC4zOCwzLjIyQzQuNTcsMy4wOCA0Ljc4LDMgNSwzVjNIMTlWM0MxOS4yMiwzIDE5LjQzLDMuMDggMTkuNjIsMy4yMkMyMC4wNSwzLjU2IDIwLjEzLDQuMTkgMTkuNzksNC42MkwxNC4wMywxMkgxNFoiIC8+CiAgPC9nPgogIDxnIGNsYXNzPSJqcC1pY29uLWRvdCIgZmlsbD0iI0ZGRiI+CiAgICA8Y2lyY2xlIGN4PSIxOCIgY3k9IjE3IiByPSIzIj48L2NpcmNsZT4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-filter-list: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTEwIDE4aDR2LTJoLTR2MnpNMyA2djJoMThWNkgzem0zIDdoMTJ2LTJINnYyeiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-filter: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiNGRkYiPgogICAgPHBhdGggZD0iTTE0LDEyVjE5Ljg4QzE0LjA0LDIwLjE4IDEzLjk0LDIwLjUgMTMuNzEsMjAuNzFDMTMuMzIsMjEuMSAxMi42OSwyMS4xIDEyLjMsMjAuNzFMMTAuMjksMTguN0MxMC4wNiwxOC40NyA5Ljk2LDE4LjE2IDEwLDE3Ljg3VjEySDkuOTdMNC4yMSw0LjYyQzMuODcsNC4xOSAzLjk1LDMuNTYgNC4zOCwzLjIyQzQuNTcsMy4wOCA0Ljc4LDMgNSwzVjNIMTlWM0MxOS4yMiwzIDE5LjQzLDMuMDggMTkuNjIsMy4yMkMyMC4wNSwzLjU2IDIwLjEzLDQuMTkgMTkuNzksNC42MkwxNC4wMywxMkgxNFoiIC8+CiAgPC9nPgo8L3N2Zz4K);
  --jp-icon-folder-favorite: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjRweCIgZmlsbD0iIzAwMDAwMCI+CiAgPHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIi8+PHBhdGggY2xhc3M9ImpwLWljb24zIGpwLWljb24tc2VsZWN0YWJsZSIgZmlsbD0iIzYxNjE2MSIgZD0iTTIwIDZoLThsLTItMkg0Yy0xLjEgMC0yIC45LTIgMnYxMmMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi0yVjhjMC0xLjEtLjktMi0yLTJ6bS0yLjA2IDExTDE1IDE1LjI4IDEyLjA2IDE3bC43OC0zLjMzLTIuNTktMi4yNCAzLjQxLS4yOUwxNSA4bDEuMzQgMy4xNCAzLjQxLjI5LTIuNTkgMi4yNC43OCAzLjMzeiIvPgo8L3N2Zz4K);
  --jp-icon-folder: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIiBkPSJNMTAgNEg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMThjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY4YzAtMS4xLS45LTItMi0yaC04bC0yLTJ6Ii8+Cjwvc3ZnPgo=);
  --jp-icon-home: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjRweCIgZmlsbD0iIzAwMDAwMCI+CiAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGNsYXNzPSJqcC1pY29uMyBqcC1pY29uLXNlbGVjdGFibGUiIGZpbGw9IiM2MTYxNjEiIGQ9Ik0xMCAyMHYtNmg0djZoNXYtOGgzTDEyIDMgMiAxMmgzdjh6Ii8+Cjwvc3ZnPgo=);
  --jp-icon-html5: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDUxMiA1MTIiPgogIDxwYXRoIGNsYXNzPSJqcC1pY29uMCBqcC1pY29uLXNlbGVjdGFibGUiIGZpbGw9IiMwMDAiIGQ9Ik0xMDguNCAwaDIzdjIyLjhoMjEuMlYwaDIzdjY5aC0yM1Y0NmgtMjF2MjNoLTIzLjJNMjA2IDIzaC0yMC4zVjBoNjMuN3YyM0gyMjl2NDZoLTIzbTUzLjUtNjloMjQuMWwxNC44IDI0LjNMMzEzLjIgMGgyNC4xdjY5aC0yM1YzNC44bC0xNi4xIDI0LjgtMTYuMS0yNC44VjY5aC0yMi42bTg5LjItNjloMjN2NDYuMmgzMi42VjY5aC01NS42Ii8+CiAgPHBhdGggY2xhc3M9ImpwLWljb24tc2VsZWN0YWJsZSIgZmlsbD0iI2U0NGQyNiIgZD0iTTEwNy42IDQ3MWwtMzMtMzcwLjRoMzYyLjhsLTMzIDM3MC4yTDI1NS43IDUxMiIvPgogIDxwYXRoIGNsYXNzPSJqcC1pY29uLXNlbGVjdGFibGUiIGZpbGw9IiNmMTY1MjkiIGQ9Ik0yNTYgNDgwLjVWMTMxaDE0OC4zTDM3NiA0NDciLz4KICA8cGF0aCBjbGFzcz0ianAtaWNvbi1zZWxlY3RhYmxlLWludmVyc2UiIGZpbGw9IiNlYmViZWIiIGQ9Ik0xNDIgMTc2LjNoMTE0djQ1LjRoLTY0LjJsNC4yIDQ2LjVoNjB2NDUuM0gxNTQuNG0yIDIyLjhIMjAybDMuMiAzNi4zIDUwLjggMTMuNnY0Ny40bC05My4yLTI2Ii8+CiAgPHBhdGggY2xhc3M9ImpwLWljb24tc2VsZWN0YWJsZS1pbnZlcnNlIiBmaWxsPSIjZmZmIiBkPSJNMzY5LjYgMTc2LjNIMjU1Ljh2NDUuNGgxMDkuNm0tNC4xIDQ2LjVIMjU1Ljh2NDUuNGg1NmwtNS4zIDU5LTUwLjcgMTMuNnY0Ny4ybDkzLTI1LjgiLz4KPC9zdmc+Cg==);
  --jp-icon-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8cGF0aCBjbGFzcz0ianAtaWNvbi1icmFuZDQganAtaWNvbi1zZWxlY3RhYmxlLWludmVyc2UiIGZpbGw9IiNGRkYiIGQ9Ik0yLjIgMi4yaDE3LjV2MTcuNUgyLjJ6Ii8+CiAgPHBhdGggY2xhc3M9ImpwLWljb24tYnJhbmQwIGpwLWljb24tc2VsZWN0YWJsZSIgZmlsbD0iIzNGNTFCNSIgZD0iTTIuMiAyLjJ2MTcuNWgxNy41bC4xLTE3LjVIMi4yem0xMi4xIDIuMmMxLjIgMCAyLjIgMSAyLjIgMi4ycy0xIDIuMi0yLjIgMi4yLTIuMi0xLTIuMi0yLjIgMS0yLjIgMi4yLTIuMnpNNC40IDE3LjZsMy4zLTguOCAzLjMgNi42IDIuMi0zLjIgNC40IDUuNEg0LjR6Ii8+Cjwvc3ZnPgo=);
  --jp-icon-info: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDUwLjk3OCA1MC45NzgiPgoJPGcgY2xhc3M9ImpwLWljb24zIiBmaWxsPSIjNjE2MTYxIj4KCQk8cGF0aCBkPSJNNDMuNTIsNy40NThDMzguNzExLDIuNjQ4LDMyLjMwNywwLDI1LjQ4OSwwQzE4LjY3LDAsMTIuMjY2LDIuNjQ4LDcuNDU4LDcuNDU4CgkJCWMtOS45NDMsOS45NDEtOS45NDMsMjYuMTE5LDAsMzYuMDYyYzQuODA5LDQuODA5LDExLjIxMiw3LjQ1NiwxOC4wMzEsNy40NThjMCwwLDAuMDAxLDAsMC4wMDIsMAoJCQljNi44MTYsMCwxMy4yMjEtMi42NDgsMTguMDI5LTcuNDU4YzQuODA5LTQuODA5LDcuNDU3LTExLjIxMiw3LjQ1Ny0xOC4wM0M1MC45NzcsMTguNjcsNDguMzI4LDEyLjI2Niw0My41Miw3LjQ1OHoKCQkJIE00Mi4xMDYsNDIuMTA1Yy00LjQzMiw0LjQzMS0xMC4zMzIsNi44NzItMTYuNjE1LDYuODcyaC0wLjAwMmMtNi4yODUtMC4wMDEtMTIuMTg3LTIuNDQxLTE2LjYxNy02Ljg3MgoJCQljLTkuMTYyLTkuMTYzLTkuMTYyLTI0LjA3MSwwLTMzLjIzM0MxMy4zMDMsNC40NCwxOS4yMDQsMiwyNS40ODksMmM2LjI4NCwwLDEyLjE4NiwyLjQ0LDE2LjYxNyw2Ljg3MgoJCQljNC40MzEsNC40MzEsNi44NzEsMTAuMzMyLDYuODcxLDE2LjYxN0M0OC45NzcsMzEuNzcyLDQ2LjUzNiwzNy42NzUsNDIuMTA2LDQyLjEwNXoiLz4KCQk8cGF0aCBkPSJNMjMuNTc4LDMyLjIxOGMtMC4wMjMtMS43MzQsMC4xNDMtMy4wNTksMC40OTYtMy45NzJjMC4zNTMtMC45MTMsMS4xMS0xLjk5NywyLjI3Mi0zLjI1MwoJCQljMC40NjgtMC41MzYsMC45MjMtMS4wNjIsMS4zNjctMS41NzVjMC42MjYtMC43NTMsMS4xMDQtMS40NzgsMS40MzYtMi4xNzVjMC4zMzEtMC43MDcsMC40OTUtMS41NDEsMC40OTUtMi41CgkJCWMwLTEuMDk2LTAuMjYtMi4wODgtMC43NzktMi45NzljLTAuNTY1LTAuODc5LTEuNTAxLTEuMzM2LTIuODA2LTEuMzY5Yy0xLjgwMiwwLjA1Ny0yLjk4NSwwLjY2Ny0zLjU1LDEuODMyCgkJCWMtMC4zMDEsMC41MzUtMC41MDMsMS4xNDEtMC42MDcsMS44MTRjLTAuMTM5LDAuNzA3LTAuMjA3LDEuNDMyLTAuMjA3LDIuMTc0aC0yLjkzN2MtMC4wOTEtMi4yMDgsMC40MDctNC4xMTQsMS40OTMtNS43MTkKCQkJYzEuMDYyLTEuNjQsMi44NTUtMi40ODEsNS4zNzgtMi41MjdjMi4xNiwwLjAyMywzLjg3NCwwLjYwOCw1LjE0MSwxLjc1OGMxLjI3OCwxLjE2LDEuOTI5LDIuNzY0LDEuOTUsNC44MTEKCQkJYzAsMS4xNDItMC4xMzcsMi4xMTEtMC40MSwyLjkxMWMtMC4zMDksMC44NDUtMC43MzEsMS41OTMtMS4yNjgsMi4yNDNjLTAuNDkyLDAuNjUtMS4wNjgsMS4zMTgtMS43MywyLjAwMgoJCQljLTAuNjUsMC42OTctMS4zMTMsMS40NzktMS45ODcsMi4zNDZjLTAuMjM5LDAuMzc3LTAuNDI5LDAuNzc3LTAuNTY1LDEuMTk5Yy0wLjE2LDAuOTU5LTAuMjE3LDEuOTUxLTAuMTcxLDIuOTc5CgkJCUMyNi41ODksMzIuMjE4LDIzLjU3OCwzMi4yMTgsMjMuNTc4LDMyLjIxOHogTTIzLjU3OCwzOC4yMnYtMy40ODRoMy4wNzZ2My40ODRIMjMuNTc4eiIvPgoJPC9nPgo8L3N2Zz4K);
  --jp-icon-inspector: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBjbGFzcz0ianAtaW5zcGVjdG9yLWljb24tY29sb3IganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIiBkPSJNMjAgNEg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMThjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY2YzAtMS4xLS45LTItMi0yem0tNSAxNEg0di00aDExdjR6bTAtNUg0VjloMTF2NHptNSA1aC00VjloNHY5eiIvPgo8L3N2Zz4K);
  --jp-icon-json: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8ZyBjbGFzcz0ianAtanNvbi1pY29uLWNvbG9yIGpwLWljb24tc2VsZWN0YWJsZSIgZmlsbD0iI0Y5QTgyNSI+CiAgICA8cGF0aCBkPSJNMjAuMiAxMS44Yy0xLjYgMC0xLjcuNS0xLjcgMSAwIC40LjEuOS4xIDEuMy4xLjUuMS45LjEgMS4zIDAgMS43LTEuNCAyLjMtMy41IDIuM2gtLjl2LTEuOWguNWMxLjEgMCAxLjQgMCAxLjQtLjggMC0uMyAwLS42LS4xLTEgMC0uNC0uMS0uOC0uMS0xLjIgMC0xLjMgMC0xLjggMS4zLTItMS4zLS4yLTEuMy0uNy0xLjMtMiAwLS40LjEtLjguMS0xLjIuMS0uNC4xLS43LjEtMSAwLS44LS40LS43LTEuNC0uOGgtLjVWNC4xaC45YzIuMiAwIDMuNS43IDMuNSAyLjMgMCAuNC0uMS45LS4xIDEuMy0uMS41LS4xLjktLjEgMS4zIDAgLjUuMiAxIDEuNyAxdjEuOHpNMS44IDEwLjFjMS42IDAgMS43LS41IDEuNy0xIDAtLjQtLjEtLjktLjEtMS4zLS4xLS41LS4xLS45LS4xLTEuMyAwLTEuNiAxLjQtMi4zIDMuNS0yLjNoLjl2MS45aC0uNWMtMSAwLTEuNCAwLTEuNC44IDAgLjMgMCAuNi4xIDEgMCAuMi4xLjYuMSAxIDAgMS4zIDAgMS44LTEuMyAyQzYgMTEuMiA2IDExLjcgNiAxM2MwIC40LS4xLjgtLjEgMS4yLS4xLjMtLjEuNy0uMSAxIDAgLjguMy44IDEuNC44aC41djEuOWgtLjljLTIuMSAwLTMuNS0uNi0zLjUtMi4zIDAtLjQuMS0uOS4xLTEuMy4xLS41LjEtLjkuMS0xLjMgMC0uNS0uMi0xLTEuNy0xdi0xLjl6Ii8+CiAgICA8Y2lyY2xlIGN4PSIxMSIgY3k9IjEzLjgiIHI9IjIuMSIvPgogICAgPGNpcmNsZSBjeD0iMTEiIGN5PSI4LjIiIHI9IjIuMSIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-julia: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDMyNSAzMDAiPgogIDxnIGNsYXNzPSJqcC1icmFuZDAganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjY2IzYzMzIj4KICAgIDxwYXRoIGQ9Ik0gMTUwLjg5ODQzOCAyMjUgQyAxNTAuODk4NDM4IDI2Ni40MjE4NzUgMTE3LjMyMDMxMiAzMDAgNzUuODk4NDM4IDMwMCBDIDM0LjQ3NjU2MiAzMDAgMC44OTg0MzggMjY2LjQyMTg3NSAwLjg5ODQzOCAyMjUgQyAwLjg5ODQzOCAxODMuNTc4MTI1IDM0LjQ3NjU2MiAxNTAgNzUuODk4NDM4IDE1MCBDIDExNy4zMjAzMTIgMTUwIDE1MC44OTg0MzggMTgzLjU3ODEyNSAxNTAuODk4NDM4IDIyNSIvPgogIDwvZz4KICA8ZyBjbGFzcz0ianAtYnJhbmQwIGpwLWljb24tc2VsZWN0YWJsZSIgZmlsbD0iIzM4OTgyNiI+CiAgICA8cGF0aCBkPSJNIDIzNy41IDc1IEMgMjM3LjUgMTE2LjQyMTg3NSAyMDMuOTIxODc1IDE1MCAxNjIuNSAxNTAgQyAxMjEuMDc4MTI1IDE1MCA4Ny41IDExNi40MjE4NzUgODcuNSA3NSBDIDg3LjUgMzMuNTc4MTI1IDEyMS4wNzgxMjUgMCAxNjIuNSAwIEMgMjAzLjkyMTg3NSAwIDIzNy41IDMzLjU3ODEyNSAyMzcuNSA3NSIvPgogIDwvZz4KICA8ZyBjbGFzcz0ianAtYnJhbmQwIGpwLWljb24tc2VsZWN0YWJsZSIgZmlsbD0iIzk1NThiMiI+CiAgICA8cGF0aCBkPSJNIDMyNC4xMDE1NjIgMjI1IEMgMzI0LjEwMTU2MiAyNjYuNDIxODc1IDI5MC41MjM0MzggMzAwIDI0OS4xMDE1NjIgMzAwIEMgMjA3LjY3OTY4OCAzMDAgMTc0LjEwMTU2MiAyNjYuNDIxODc1IDE3NC4xMDE1NjIgMjI1IEMgMTc0LjEwMTU2MiAxODMuNTc4MTI1IDIwNy42Nzk2ODggMTUwIDI0OS4xMDE1NjIgMTUwIEMgMjkwLjUyMzQzOCAxNTAgMzI0LjEwMTU2MiAxODMuNTc4MTI1IDMyNC4xMDE1NjIgMjI1Ii8+CiAgPC9nPgo8L3N2Zz4K);
  --jp-icon-jupyter-favicon: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUyIiBoZWlnaHQ9IjE2NSIgdmlld0JveD0iMCAwIDE1MiAxNjUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgPGcgY2xhc3M9ImpwLWp1cHl0ZXItaWNvbi1jb2xvciIgZmlsbD0iI0YzNzcyNiI+CiAgICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjA3ODk0NywgMTEwLjU4MjkyNykiIGQ9Ik03NS45NDIyODQyLDI5LjU4MDQ1NjEgQzQzLjMwMjM5NDcsMjkuNTgwNDU2MSAxNC43OTY3ODMyLDE3LjY1MzQ2MzQgMCwwIEM1LjUxMDgzMjExLDE1Ljg0MDY4MjkgMTUuNzgxNTM4OSwyOS41NjY3NzMyIDI5LjM5MDQ5NDcsMzkuMjc4NDE3MSBDNDIuOTk5Nyw0OC45ODk4NTM3IDU5LjI3MzcsNTQuMjA2NzgwNSA3NS45NjA1Nzg5LDU0LjIwNjc4MDUgQzkyLjY0NzQ1NzksNTQuMjA2NzgwNSAxMDguOTIxNDU4LDQ4Ljk4OTg1MzcgMTIyLjUzMDY2MywzOS4yNzg0MTcxIEMxMzYuMTM5NDUzLDI5LjU2Njc3MzIgMTQ2LjQxMDI4NCwxNS44NDA2ODI5IDE1MS45MjExNTgsMCBDMTM3LjA4Nzg2OCwxNy42NTM0NjM0IDEwOC41ODI1ODksMjkuNTgwNDU2MSA3NS45NDIyODQyLDI5LjU4MDQ1NjEgTDc1Ljk0MjI4NDIsMjkuNTgwNDU2MSBaIiAvPgogICAgPHBhdGggdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMzczNjgsIDAuNzA0ODc4KSIgZD0iTTc1Ljk3ODQ1NzksMjQuNjI2NDA3MyBDMTA4LjYxODc2MywyNC42MjY0MDczIDEzNy4xMjQ0NTgsMzYuNTUzNDQxNSAxNTEuOTIxMTU4LDU0LjIwNjc4MDUgQzE0Ni40MTAyODQsMzguMzY2MjIyIDEzNi4xMzk0NTMsMjQuNjQwMTMxNyAxMjIuNTMwNjYzLDE0LjkyODQ4NzggQzEwOC45MjE0NTgsNS4yMTY4NDM5IDkyLjY0NzQ1NzksMCA3NS45NjA1Nzg5LDAgQzU5LjI3MzcsMCA0Mi45OTk3LDUuMjE2ODQzOSAyOS4zOTA0OTQ3LDE0LjkyODQ4NzggQzE1Ljc4MTUzODksMjQuNjQwMTMxNyA1LjUxMDgzMjExLDM4LjM2NjIyMiAwLDU0LjIwNjc4MDUgQzE0LjgzMzA4MTYsMzYuNTg5OTI5MyA0My4zMzg1Njg0LDI0LjYyNjQwNzMgNzUuOTc4NDU3OSwyNC42MjY0MDczIEw3NS45Nzg0NTc5LDI0LjYyNjQwNzMgWiIgLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-jupyter: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzkiIGhlaWdodD0iNTEiIHZpZXdCb3g9IjAgMCAzOSA1MSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTYzOCAtMjI4MSkiPgogICAgIDxnIGNsYXNzPSJqcC1qdXB5dGVyLWljb24tY29sb3IiIGZpbGw9IiNGMzc3MjYiPgogICAgICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjM5Ljc0IDIzMTEuOTgpIiBkPSJNIDE4LjI2NDYgNy4xMzQxMUMgMTAuNDE0NSA3LjEzNDExIDMuNTU4NzIgNC4yNTc2IDAgMEMgMS4zMjUzOSAzLjgyMDQgMy43OTU1NiA3LjEzMDgxIDcuMDY4NiA5LjQ3MzAzQyAxMC4zNDE3IDExLjgxNTIgMTQuMjU1NyAxMy4wNzM0IDE4LjI2OSAxMy4wNzM0QyAyMi4yODIzIDEzLjA3MzQgMjYuMTk2MyAxMS44MTUyIDI5LjQ2OTQgOS40NzMwM0MgMzIuNzQyNCA3LjEzMDgxIDM1LjIxMjYgMy44MjA0IDM2LjUzOCAwQyAzMi45NzA1IDQuMjU3NiAyNi4xMTQ4IDcuMTM0MTEgMTguMjY0NiA3LjEzNDExWiIvPgogICAgICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjM5LjczIDIyODUuNDgpIiBkPSJNIDE4LjI3MzMgNS45MzkzMUMgMjYuMTIzNSA1LjkzOTMxIDMyLjk3OTMgOC44MTU4MyAzNi41MzggMTMuMDczNEMgMzUuMjEyNiA5LjI1MzAzIDMyLjc0MjQgNS45NDI2MiAyOS40Njk0IDMuNjAwNEMgMjYuMTk2MyAxLjI1ODE4IDIyLjI4MjMgMCAxOC4yNjkgMEMgMTQuMjU1NyAwIDEwLjM0MTcgMS4yNTgxOCA3LjA2ODYgMy42MDA0QyAzLjc5NTU2IDUuOTQyNjIgMS4zMjUzOSA5LjI1MzAzIDAgMTMuMDczNEMgMy41Njc0NSA4LjgyNDYzIDEwLjQyMzIgNS45MzkzMSAxOC4yNzMzIDUuOTM5MzFaIi8+CiAgICA8L2c+CiAgICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjY5LjMgMjI4MS4zMSkiIGQ9Ik0gNS44OTM1MyAyLjg0NEMgNS45MTg4OSAzLjQzMTY1IDUuNzcwODUgNC4wMTM2NyA1LjQ2ODE1IDQuNTE2NDVDIDUuMTY1NDUgNS4wMTkyMiA0LjcyMTY4IDUuNDIwMTUgNC4xOTI5OSA1LjY2ODUxQyAzLjY2NDMgNS45MTY4OCAzLjA3NDQ0IDYuMDAxNTEgMi40OTgwNSA1LjkxMTcxQyAxLjkyMTY2IDUuODIxOSAxLjM4NDYzIDUuNTYxNyAwLjk1NDg5OCA1LjE2NDAxQyAwLjUyNTE3IDQuNzY2MzMgMC4yMjIwNTYgNC4yNDkwMyAwLjA4MzkwMzcgMy42Nzc1N0MgLTAuMDU0MjQ4MyAzLjEwNjExIC0wLjAyMTIzIDIuNTA2MTcgMC4xNzg3ODEgMS45NTM2NEMgMC4zNzg3OTMgMS40MDExIDAuNzM2ODA5IDAuOTIwODE3IDEuMjA3NTQgMC41NzM1MzhDIDEuNjc4MjYgMC4yMjYyNTkgMi4yNDA1NSAwLjAyNzU5MTkgMi44MjMyNiAwLjAwMjY3MjI5QyAzLjYwMzg5IC0wLjAzMDcxMTUgNC4zNjU3MyAwLjI0OTc4OSA0Ljk0MTQyIDAuNzgyNTUxQyA1LjUxNzExIDEuMzE1MzEgNS44NTk1NiAyLjA1Njc2IDUuODkzNTMgMi44NDRaIi8+CiAgICAgIDxwYXRoIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2MzkuOCAyMzIzLjgxKSIgZD0iTSA3LjQyNzg5IDMuNTgzMzhDIDcuNDYwMDggNC4zMjQzIDcuMjczNTUgNS4wNTgxOSA2Ljg5MTkzIDUuNjkyMTNDIDYuNTEwMzEgNi4zMjYwNyA1Ljk1MDc1IDYuODMxNTYgNS4yODQxMSA3LjE0NDZDIDQuNjE3NDcgNy40NTc2MyAzLjg3MzcxIDcuNTY0MTQgMy4xNDcwMiA3LjQ1MDYzQyAyLjQyMDMyIDcuMzM3MTIgMS43NDMzNiA3LjAwODcgMS4yMDE4NCA2LjUwNjk1QyAwLjY2MDMyOCA2LjAwNTIgMC4yNzg2MSA1LjM1MjY4IDAuMTA1MDE3IDQuNjMyMDJDIC0wLjA2ODU3NTcgMy45MTEzNSAtMC4wMjYyMzYxIDMuMTU0OTQgMC4yMjY2NzUgMi40NTg1NkMgMC40Nzk1ODcgMS43NjIxNyAwLjkzMTY5NyAxLjE1NzEzIDEuNTI1NzYgMC43MjAwMzNDIDIuMTE5ODMgMC4yODI5MzUgMi44MjkxNCAwLjAzMzQzOTUgMy41NjM4OSAwLjAwMzEzMzQ0QyA0LjU0NjY3IC0wLjAzNzQwMzMgNS41MDUyOSAwLjMxNjcwNiA2LjIyOTYxIDAuOTg3ODM1QyA2Ljk1MzkzIDEuNjU4OTYgNy4zODQ4NCAyLjU5MjM1IDcuNDI3ODkgMy41ODMzOEwgNy40Mjc4OSAzLjU4MzM4WiIvPgogICAgICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjM4LjM2IDIyODYuMDYpIiBkPSJNIDIuMjc0NzEgNC4zOTYyOUMgMS44NDM2MyA0LjQxNTA4IDEuNDE2NzEgNC4zMDQ0NSAxLjA0Nzk5IDQuMDc4NDNDIDAuNjc5MjY4IDMuODUyNCAwLjM4NTMyOCAzLjUyMTE0IDAuMjAzMzcxIDMuMTI2NTZDIDAuMDIxNDEzNiAyLjczMTk4IC0wLjA0MDM3OTggMi4yOTE4MyAwLjAyNTgxMTYgMS44NjE4MUMgMC4wOTIwMDMxIDEuNDMxOCAwLjI4MzIwNCAxLjAzMTI2IDAuNTc1MjEzIDAuNzEwODgzQyAwLjg2NzIyMiAwLjM5MDUxIDEuMjQ2OTEgMC4xNjQ3MDggMS42NjYyMiAwLjA2MjA1OTJDIDIuMDg1NTMgLTAuMDQwNTg5NyAyLjUyNTYxIC0wLjAxNTQ3MTQgMi45MzA3NiAwLjEzNDIzNUMgMy4zMzU5MSAwLjI4Mzk0MSAzLjY4NzkyIDAuNTUxNTA1IDMuOTQyMjIgMC45MDMwNkMgNC4xOTY1MiAxLjI1NDYyIDQuMzQxNjkgMS42NzQzNiA0LjM1OTM1IDIuMTA5MTZDIDQuMzgyOTkgMi42OTEwNyA0LjE3Njc4IDMuMjU4NjkgMy43ODU5NyAzLjY4NzQ2QyAzLjM5NTE2IDQuMTE2MjQgMi44NTE2NiA0LjM3MTE2IDIuMjc0NzEgNC4zOTYyOUwgMi4yNzQ3MSA0LjM5NjI5WiIvPgogICAgPC9nPgogIDwvZz4+Cjwvc3ZnPgo=);
  --jp-icon-jupyterlab-wordmark: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIHZpZXdCb3g9IjAgMCAxODYwLjggNDc1Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjIiIGZpbGw9IiM0RTRFNEUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ4MC4xMzY0MDEsIDY0LjI3MTQ5MykiPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDU4Ljg3NTU2NikiPgogICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjA4NzYwMywgMC4xNDAyOTQpIj4KICAgICAgICA8cGF0aCBkPSJNLTQyNi45LDE2OS44YzAsNDguNy0zLjcsNjQuNy0xMy42LDc2LjRjLTEwLjgsMTAtMjUsMTUuNS0zOS43LDE1LjVsMy43LDI5IGMyMi44LDAuMyw0NC44LTcuOSw2MS45LTIzLjFjMTcuOC0xOC41LDI0LTQ0LjEsMjQtODMuM1YwSC00Mjd2MTcwLjFMLTQyNi45LDE2OS44TC00MjYuOSwxNjkuOHoiLz4KICAgICAgPC9nPgogICAgPC9nPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTU1LjA0NTI5NiwgNTYuODM3MTA0KSI+CiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuNTYyNDUzLCAxLjc5OTg0MikiPgogICAgICAgIDxwYXRoIGQ9Ik0tMzEyLDE0OGMwLDIxLDAsMzkuNSwxLjcsNTUuNGgtMzEuOGwtMi4xLTMzLjNoLTAuOGMtNi43LDExLjYtMTYuNCwyMS4zLTI4LDI3LjkgYy0xMS42LDYuNi0yNC44LDEwLTM4LjIsOS44Yy0zMS40LDAtNjktMTcuNy02OS04OVYwaDM2LjR2MTEyLjdjMCwzOC43LDExLjYsNjQuNyw0NC42LDY0LjdjMTAuMy0wLjIsMjAuNC0zLjUsMjguOS05LjQgYzguNS01LjksMTUuMS0xNC4zLDE4LjktMjMuOWMyLjItNi4xLDMuMy0xMi41LDMuMy0xOC45VjAuMmgzNi40VjE0OEgtMzEyTC0zMTIsMTQ4eiIvPgogICAgICA8L2c+CiAgICA8L2c+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzOTAuMDEzMzIyLCA1My40Nzk2MzgpIj4KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS43MDY0NTgsIDAuMjMxNDI1KSI+CiAgICAgICAgPHBhdGggZD0iTS00NzguNiw3MS40YzAtMjYtMC44LTQ3LTEuNy02Ni43aDMyLjdsMS43LDM0LjhoMC44YzcuMS0xMi41LDE3LjUtMjIuOCwzMC4xLTI5LjcgYzEyLjUtNywyNi43LTEwLjMsNDEtOS44YzQ4LjMsMCw4NC43LDQxLjcsODQuNywxMDMuM2MwLDczLjEtNDMuNywxMDkuMi05MSwxMDkuMmMtMTIuMSwwLjUtMjQuMi0yLjItMzUtNy44IGMtMTAuOC01LjYtMTkuOS0xMy45LTI2LjYtMjQuMmgtMC44VjI5MWgtMzZ2LTIyMEwtNDc4LjYsNzEuNEwtNDc4LjYsNzEuNHogTS00NDIuNiwxMjUuNmMwLjEsNS4xLDAuNiwxMC4xLDEuNywxNS4xIGMzLDEyLjMsOS45LDIzLjMsMTkuOCwzMS4xYzkuOSw3LjgsMjIuMSwxMi4xLDM0LjcsMTIuMWMzOC41LDAsNjAuNy0zMS45LDYwLjctNzguNWMwLTQwLjctMjEuMS03NS42LTU5LjUtNzUuNiBjLTEyLjksMC40LTI1LjMsNS4xLTM1LjMsMTMuNGMtOS45LDguMy0xNi45LDE5LjctMTkuNiwzMi40Yy0xLjUsNC45LTIuMywxMC0yLjUsMTUuMVYxMjUuNkwtNDQyLjYsMTI1LjZMLTQ0Mi42LDEyNS42eiIvPgogICAgICA8L2c+CiAgICA8L2c+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MDYuNzQwNzI2LCA1Ni44MzcxMDQpIj4KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC43NTEyMjYsIDEuOTg5Mjk5KSI+CiAgICAgICAgPHBhdGggZD0iTS00NDAuOCwwbDQzLjcsMTIwLjFjNC41LDEzLjQsOS41LDI5LjQsMTIuOCw0MS43aDAuOGMzLjctMTIuMiw3LjktMjcuNywxMi44LTQyLjQgbDM5LjctMTE5LjJoMzguNUwtMzQ2LjksMTQ1Yy0yNiw2OS43LTQzLjcsMTA1LjQtNjguNiwxMjcuMmMtMTIuNSwxMS43LTI3LjksMjAtNDQuNiwyMy45bC05LjEtMzEuMSBjMTEuNy0zLjksMjIuNS0xMC4xLDMxLjgtMTguMWMxMy4yLTExLjEsMjMuNy0yNS4yLDMwLjYtNDEuMmMxLjUtMi44LDIuNS01LjcsMi45LTguOGMtMC4zLTMuMy0xLjItNi42LTIuNS05LjdMLTQ4MC4yLDAuMSBoMzkuN0wtNDQwLjgsMEwtNDQwLjgsMHoiLz4KICAgICAgPC9nPgogICAgPC9nPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODIyLjc0ODEwNCwgMC4wMDAwMDApIj4KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS40NjQwNTAsIDAuMzc4OTE0KSI+CiAgICAgICAgPHBhdGggZD0iTS00MTMuNywwdjU4LjNoNTJ2MjguMmgtNTJWMTk2YzAsMjUsNywzOS41LDI3LjMsMzkuNWM3LjEsMC4xLDE0LjItMC43LDIxLjEtMi41IGwxLjcsMjcuN2MtMTAuMywzLjctMjEuMyw1LjQtMzIuMiw1Yy03LjMsMC40LTE0LjYtMC43LTIxLjMtMy40Yy02LjgtMi43LTEyLjktNi44LTE3LjktMTIuMWMtMTAuMy0xMC45LTE0LjEtMjktMTQuMS01Mi45IFY4Ni41aC0zMVY1OC4zaDMxVjkuNkwtNDEzLjcsMEwtNDEzLjcsMHoiLz4KICAgICAgPC9nPgogICAgPC9nPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTc0LjQzMzI4NiwgNTMuNDc5NjM4KSI+CiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuOTkwMDM0LCAwLjYxMDMzOSkiPgogICAgICAgIDxwYXRoIGQ9Ik0tNDQ1LjgsMTEzYzAuOCw1MCwzMi4yLDcwLjYsNjguNiw3MC42YzE5LDAuNiwzNy45LTMsNTUuMy0xMC41bDYuMiwyNi40IGMtMjAuOSw4LjktNDMuNSwxMy4xLTY2LjIsMTIuNmMtNjEuNSwwLTk4LjMtNDEuMi05OC4zLTEwMi41Qy00ODAuMiw0OC4yLTQ0NC43LDAtMzg2LjUsMGM2NS4yLDAsODIuNyw1OC4zLDgyLjcsOTUuNyBjLTAuMSw1LjgtMC41LDExLjUtMS4yLDE3LjJoLTE0MC42SC00NDUuOEwtNDQ1LjgsMTEzeiBNLTMzOS4yLDg2LjZjMC40LTIzLjUtOS41LTYwLjEtNTAuNC02MC4xIGMtMzYuOCwwLTUyLjgsMzQuNC01NS43LDYwLjFILTMzOS4yTC0zMzkuMiw4Ni42TC0zMzkuMiw4Ni42eiIvPgogICAgICA8L2c+CiAgICA8L2c+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjAxLjk2MTA1OCwgNTMuNDc5NjM4KSI+CiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuMTc5NjQwLCAwLjcwNTA2OCkiPgogICAgICAgIDxwYXRoIGQ9Ik0tNDc4LjYsNjhjMC0yMy45LTAuNC00NC41LTEuNy02My40aDMxLjhsMS4yLDM5LjloMS43YzkuMS0yNy4zLDMxLTQ0LjUsNTUuMy00NC41IGMzLjUtMC4xLDcsMC40LDEwLjMsMS4ydjM0LjhjLTQuMS0wLjktOC4yLTEuMy0xMi40LTEuMmMtMjUuNiwwLTQzLjcsMTkuNy00OC43LDQ3LjRjLTEsNS43LTEuNiwxMS41LTEuNywxNy4ydjEwOC4zaC0zNlY2OCBMLTQ3OC42LDY4eiIvPgogICAgICA8L2c+CiAgICA8L2c+CiAgPC9nPgoKICA8ZyBjbGFzcz0ianAtaWNvbi13YXJuMCIgZmlsbD0iI0YzNzcyNiI+CiAgICA8cGF0aCBkPSJNMTM1Mi4zLDMyNi4yaDM3VjI4aC0zN1YzMjYuMnogTTE2MDQuOCwzMjYuMmMtMi41LTEzLjktMy40LTMxLjEtMy40LTQ4Ljd2LTc2IGMwLTQwLjctMTUuMS04My4xLTc3LjMtODMuMWMtMjUuNiwwLTUwLDcuMS02Ni44LDE4LjFsOC40LDI0LjRjMTQuMy05LjIsMzQtMTUuMSw1My0xNS4xYzQxLjYsMCw0Ni4yLDMwLjIsNDYuMiw0N3Y0LjIgYy03OC42LTAuNC0xMjIuMywyNi41LTEyMi4zLDc1LjZjMCwyOS40LDIxLDU4LjQsNjIuMiw1OC40YzI5LDAsNTAuOS0xNC4zLDYyLjItMzAuMmgxLjNsMi45LDI1LjZIMTYwNC44eiBNMTU2NS43LDI1Ny43IGMwLDMuOC0wLjgsOC0yLjEsMTEuOGMtNS45LDE3LjItMjIuNywzNC00OS4yLDM0Yy0xOC45LDAtMzQuOS0xMS4zLTM0LjktMzUuM2MwLTM5LjUsNDUuOC00Ni42LDg2LjItNDUuOFYyNTcuN3ogTTE2OTguNSwzMjYuMiBsMS43LTMzLjZoMS4zYzE1LjEsMjYuOSwzOC43LDM4LjIsNjguMSwzOC4yYzQ1LjQsMCw5MS4yLTM2LjEsOTEuMi0xMDguOGMwLjQtNjEuNy0zNS4zLTEwMy43LTg1LjctMTAzLjcgYy0zMi44LDAtNTYuMywxNC43LTY5LjMsMzcuNGgtMC44VjI4aC0zNi42djI0NS43YzAsMTguMS0wLjgsMzguNi0xLjcsNTIuNUgxNjk4LjV6IE0xNzA0LjgsMjA4LjJjMC01LjksMS4zLTEwLjksMi4xLTE1LjEgYzcuNi0yOC4xLDMxLjEtNDUuNCw1Ni4zLTQ1LjRjMzkuNSwwLDYwLjUsMzQuOSw2MC41LDc1LjZjMCw0Ni42LTIzLjEsNzguMS02MS44LDc4LjFjLTI2LjksMC00OC4zLTE3LjYtNTUuNS00My4zIGMtMC44LTQuMi0xLjctOC44LTEuNy0xMy40VjIwOC4yeiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-kernel: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGNsYXNzPSJqcC1pY29uMiIgZmlsbD0iIzYxNjE2MSIgZD0iTTE1IDlIOXY2aDZWOXptLTIgNGgtMnYtMmgydjJ6bTgtMlY5aC0yVjdjMC0xLjEtLjktMi0yLTJoLTJWM2gtMnYyaC0yVjNIOXYySDdjLTEuMSAwLTIgLjktMiAydjJIM3YyaDJ2MkgzdjJoMnYyYzAgMS4xLjkgMiAyIDJoMnYyaDJ2LTJoMnYyaDJ2LTJoMmMxLjEgMCAyLS45IDItMnYtMmgydi0yaC0ydi0yaDJ6bS00IDZIN1Y3aDEwdjEweiIvPgo8L3N2Zz4K);
  --jp-icon-keyboard: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIiBkPSJNMjAgNUg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMTdjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY3YzAtMS4xLS45LTItMi0yem0tOSAzaDJ2MmgtMlY4em0wIDNoMnYyaC0ydi0yek04IDhoMnYySDhWOHptMCAzaDJ2Mkg4di0yem0tMSAySDV2LTJoMnYyem0wLTNINVY4aDJ2MnptOSA3SDh2LTJoOHYyem0wLTRoLTJ2LTJoMnYyem0wLTNoLTJWOGgydjJ6bTMgM2gtMnYtMmgydjJ6bTAtM2gtMlY4aDJ2MnoiLz4KPC9zdmc+Cg==);
  --jp-icon-launch: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzIgMzIiIHdpZHRoPSIzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIj4KICAgIDxwYXRoIGQ9Ik0yNiwyOEg2YTIuMDAyNywyLjAwMjcsMCwwLDEtMi0yVjZBMi4wMDI3LDIuMDAyNywwLDAsMSw2LDRIMTZWNkg2VjI2SDI2VjE2aDJWMjZBMi4wMDI3LDIuMDAyNywwLDAsMSwyNiwyOFoiLz4KICAgIDxwb2x5Z29uIHBvaW50cz0iMjAgMiAyMCA0IDI2LjU4NiA0IDE4IDEyLjU4NiAxOS40MTQgMTQgMjggNS40MTQgMjggMTIgMzAgMTIgMzAgMiAyMCAyIi8+CiAgPC9nPgo8L3N2Zz4K);
  --jp-icon-launcher: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIiBkPSJNMTkgMTlINVY1aDdWM0g1YTIgMiAwIDAwLTIgMnYxNGEyIDIgMCAwMDIgMmgxNGMxLjEgMCAyLS45IDItMnYtN2gtMnY3ek0xNCAzdjJoMy41OWwtOS44MyA5LjgzIDEuNDEgMS40MUwxOSA2LjQxVjEwaDJWM2gtN3oiLz4KPC9zdmc+Cg==);
  --jp-icon-line-form: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IndoaXRlIiBkPSJNNS44OCA0LjEyTDEzLjc2IDEybC03Ljg4IDcuODhMOCAyMmwxMC0xMEw4IDJ6Ii8+Cjwvc3ZnPgo=);
  --jp-icon-link: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTMuOSAxMmMwLTEuNzEgMS4zOS0zLjEgMy4xLTMuMWg0VjdIN2MtMi43NiAwLTUgMi4yNC01IDVzMi4yNCA1IDUgNWg0di0xLjlIN2MtMS43MSAwLTMuMS0xLjM5LTMuMS0zLjF6TTggMTNoOHYtMkg4djJ6bTktNmgtNHYxLjloNGMxLjcxIDAgMy4xIDEuMzkgMy4xIDMuMXMtMS4zOSAzLjEtMy4xIDMuMWgtNFYxN2g0YzIuNzYgMCA1LTIuMjQgNS01cy0yLjI0LTUtNS01eiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-list: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGNsYXNzPSJqcC1pY29uMiBqcC1pY29uLXNlbGVjdGFibGUiIGZpbGw9IiM2MTYxNjEiIGQ9Ik0xOSA1djE0SDVWNWgxNG0xLjEtMkgzLjljLS41IDAtLjkuNC0uOS45djE2LjJjMCAuNC40LjkuOS45aDE2LjJjLjQgMCAuOS0uNS45LS45VjMuOWMwLS41LS41LS45LS45LS45ek0xMSA3aDZ2MmgtNlY3em0wIDRoNnYyaC02di0yem0wIDRoNnYyaC02ek03IDdoMnYySDd6bTAgNGgydjJIN3ptMCA0aDJ2Mkg3eiIvPgo8L3N2Zz4K);
  --jp-icon-markdown: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8cGF0aCBjbGFzcz0ianAtaWNvbi1jb250cmFzdDAganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjN0IxRkEyIiBkPSJNNSAxNC45aDEybC02LjEgNnptOS40LTYuOGMwLTEuMy0uMS0yLjktLjEtNC41LS40IDEuNC0uOSAyLjktMS4zIDQuM2wtMS4zIDQuM2gtMkw4LjUgNy45Yy0uNC0xLjMtLjctMi45LTEtNC4zLS4xIDEuNi0uMSAzLjItLjIgNC42TDcgMTIuNEg0LjhsLjctMTFoMy4zTDEwIDVjLjQgMS4yLjcgMi43IDEgMy45LjMtMS4yLjctMi42IDEtMy45bDEuMi0zLjdoMy4zbC42IDExaC0yLjRsLS4zLTQuMnoiLz4KPC9zdmc+Cg==);
  --jp-icon-move-down: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggY2xhc3M9ImpwLWljb24zIiBkPSJNMTIuNDcxIDcuNTI4OTlDMTIuNzYzMiA3LjIzNjg0IDEyLjc2MzIgNi43NjMxNiAxMi40NzEgNi40NzEwMVY2LjQ3MTAxQzEyLjE3OSA2LjE3OTA1IDExLjcwNTcgNi4xNzg4NCAxMS40MTM1IDYuNDcwNTRMNy43NSAxMC4xMjc1VjEuNzVDNy43NSAxLjMzNTc5IDcuNDE0MjEgMSA3IDFWMUM2LjU4NTc5IDEgNi4yNSAxLjMzNTc5IDYuMjUgMS43NVYxMC4xMjc1TDIuNTk3MjYgNi40NjgyMkMyLjMwMzM4IDYuMTczODEgMS44MjY0MSA2LjE3MzU5IDEuNTMyMjYgNi40Njc3NFY2LjQ2Nzc0QzEuMjM4MyA2Ljc2MTcgMS4yMzgzIDcuMjM4MyAxLjUzMjI2IDcuNTMyMjZMNi4yOTI4OSAxMi4yOTI5QzYuNjgzNDIgMTIuNjgzNCA3LjMxNjU4IDEyLjY4MzQgNy43MDcxMSAxMi4yOTI5TDEyLjQ3MSA3LjUyODk5WiIgZmlsbD0iIzYxNjE2MSIvPgo8L3N2Zz4K);
  --jp-icon-move-up: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggY2xhc3M9ImpwLWljb24zIiBkPSJNMS41Mjg5OSA2LjQ3MTAxQzEuMjM2ODQgNi43NjMxNiAxLjIzNjg0IDcuMjM2ODQgMS41Mjg5OSA3LjUyODk5VjcuNTI4OTlDMS44MjA5NSA3LjgyMDk1IDIuMjk0MjYgNy44MjExNiAyLjU4NjQ5IDcuNTI5NDZMNi4yNSAzLjg3MjVWMTIuMjVDNi4yNSAxMi42NjQyIDYuNTg1NzkgMTMgNyAxM1YxM0M3LjQxNDIxIDEzIDcuNzUgMTIuNjY0MiA3Ljc1IDEyLjI1VjMuODcyNUwxMS40MDI3IDcuNTMxNzhDMTEuNjk2NiA3LjgyNjE5IDEyLjE3MzYgNy44MjY0MSAxMi40Njc3IDcuNTMyMjZWNy41MzIyNkMxMi43NjE3IDcuMjM4MyAxMi43NjE3IDYuNzYxNyAxMi40Njc3IDYuNDY3NzRMNy43MDcxMSAxLjcwNzExQzcuMzE2NTggMS4zMTY1OCA2LjY4MzQyIDEuMzE2NTggNi4yOTI4OSAxLjcwNzExTDEuNTI4OTkgNi40NzEwMVoiIGZpbGw9IiM2MTYxNjEiLz4KPC9zdmc+Cg==);
  --jp-icon-new-folder: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTIwIDZoLThsLTItMkg0Yy0xLjExIDAtMS45OS44OS0xLjk5IDJMMiAxOGMwIDEuMTEuODkgMiAyIDJoMTZjMS4xMSAwIDItLjg5IDItMlY4YzAtMS4xMS0uODktMi0yLTJ6bS0xIDhoLTN2M2gtMnYtM2gtM3YtMmgzVjloMnYzaDN2MnoiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-not-trusted: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI1IDI1Ij4KICAgIDxwYXRoIGNsYXNzPSJqcC1pY29uMiIgc3Ryb2tlPSIjMzMzMzMzIiBzdHJva2Utd2lkdGg9IjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMgMykiIGQ9Ik0xLjg2MDk0IDExLjQ0MDlDMC44MjY0NDggOC43NzAyNyAwLjg2Mzc3OSA2LjA1NzY0IDEuMjQ5MDcgNC4xOTkzMkMyLjQ4MjA2IDMuOTMzNDcgNC4wODA2OCAzLjQwMzQ3IDUuNjAxMDIgMi44NDQ5QzcuMjM1NDkgMi4yNDQ0IDguODU2NjYgMS41ODE1IDkuOTg3NiAxLjA5NTM5QzExLjA1OTcgMS41ODM0MSAxMi42MDk0IDIuMjQ0NCAxNC4yMTggMi44NDMzOUMxNS43NTAzIDMuNDEzOTQgMTcuMzk5NSAzLjk1MjU4IDE4Ljc1MzkgNC4yMTM4NUMxOS4xMzY0IDYuMDcxNzcgMTkuMTcwOSA4Ljc3NzIyIDE4LjEzOSAxMS40NDA5QzE3LjAzMDMgMTQuMzAzMiAxNC42NjY4IDE3LjE4NDQgOS45OTk5OSAxOC45MzU0QzUuMzMzMTkgMTcuMTg0NCAyLjk2OTY4IDE0LjMwMzIgMS44NjA5NCAxMS40NDA5WiIvPgogICAgPHBhdGggY2xhc3M9ImpwLWljb24yIiBzdHJva2U9IiMzMzMzMzMiIHN0cm9rZS13aWR0aD0iMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOS4zMTU5MiA5LjMyMDMxKSIgZD0iTTcuMzY4NDIgMEwwIDcuMzY0NzkiLz4KICAgIDxwYXRoIGNsYXNzPSJqcC1pY29uMiIgc3Ryb2tlPSIjMzMzMzMzIiBzdHJva2Utd2lkdGg9IjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkuMzE1OTIgMTYuNjgzNikgc2NhbGUoMSAtMSkiIGQ9Ik03LjM2ODQyIDBMMCA3LjM2NDc5Ii8+Cjwvc3ZnPgo=);
  --jp-icon-notebook: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8ZyBjbGFzcz0ianAtbm90ZWJvb2staWNvbi1jb2xvciBqcC1pY29uLXNlbGVjdGFibGUiIGZpbGw9IiNFRjZDMDAiPgogICAgPHBhdGggZD0iTTE4LjcgMy4zdjE1LjRIMy4zVjMuM2gxNS40bTEuNS0xLjVIMS44djE4LjNoMTguM2wuMS0xOC4zeiIvPgogICAgPHBhdGggZD0iTTE2LjUgMTYuNWwtNS40LTQuMy01LjYgNC4zdi0xMWgxMXoiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-numbering: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyOCAyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CgkJPHBhdGggZD0iTTQgMTlINlYxOS41SDVWMjAuNUg2VjIxSDRWMjJIN1YxOEg0VjE5Wk01IDEwSDZWNkg0VjdINVYxMFpNNCAxM0g1LjhMNCAxNS4xVjE2SDdWMTVINS4yTDcgMTIuOVYxMkg0VjEzWk05IDdWOUgyM1Y3SDlaTTkgMjFIMjNWMTlIOVYyMVpNOSAxNUgyM1YxM0g5VjE1WiIvPgoJPC9nPgo8L3N2Zz4K);
  --jp-icon-offline-bolt: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE2Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTEyIDIuMDJjLTUuNTEgMC05Ljk4IDQuNDctOS45OCA5Ljk4czQuNDcgOS45OCA5Ljk4IDkuOTggOS45OC00LjQ3IDkuOTgtOS45OFMxNy41MSAyLjAyIDEyIDIuMDJ6TTExLjQ4IDIwdi02LjI2SDhMMTMgNHY2LjI2aDMuMzVMMTEuNDggMjB6Ii8+CiAgPC9nPgo8L3N2Zz4K);
  --jp-icon-palette: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTE4IDEzVjIwSDRWNkg5LjAyQzkuMDcgNS4yOSA5LjI0IDQuNjIgOS41IDRINEMyLjkgNCAyIDQuOSAyIDZWMjBDMiAyMS4xIDIuOSAyMiA0IDIySDE4QzE5LjEgMjIgMjAgMjEuMSAyMCAyMFYxNUwxOCAxM1pNMTkuMyA4Ljg5QzE5Ljc0IDguMTkgMjAgNy4zOCAyMCA2LjVDMjAgNC4wMSAxNy45OSAyIDE1LjUgMkMxMy4wMSAyIDExIDQuMDEgMTEgNi41QzExIDguOTkgMTMuMDEgMTEgMTUuNDkgMTFDMTYuMzcgMTEgMTcuMTkgMTAuNzQgMTcuODggMTAuM0wyMSAxMy40MkwyMi40MiAxMkwxOS4zIDguODlaTTE1LjUgOUMxNC4xMiA5IDEzIDcuODggMTMgNi41QzEzIDUuMTIgMTQuMTIgNCAxNS41IDRDMTYuODggNCAxOCA1LjEyIDE4IDYuNUMxOCA3Ljg4IDE2Ljg4IDkgMTUuNSA5WiIvPgogICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00IDZIOS4wMTg5NEM5LjAwNjM5IDYuMTY1MDIgOSA2LjMzMTc2IDkgNi41QzkgOC44MTU3NyAxMC4yMTEgMTAuODQ4NyAxMi4wMzQzIDEySDlWMTRIMTZWMTIuOTgxMUMxNi41NzAzIDEyLjkzNzcgMTcuMTIgMTIuODIwNyAxNy42Mzk2IDEyLjYzOTZMMTggMTNWMjBINFY2Wk04IDhINlYxMEg4VjhaTTYgMTJIOFYxNEg2VjEyWk04IDE2SDZWMThIOFYxNlpNOSAxNkgxNlYxOEg5VjE2WiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-paste: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTE5IDJoLTQuMThDMTQuNC44NCAxMy4zIDAgMTIgMGMtMS4zIDAtMi40Ljg0LTIuODIgMkg1Yy0xLjEgMC0yIC45LTIgMnYxNmMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjRjMC0xLjEtLjktMi0yLTJ6bS03IDBjLjU1IDAgMSAuNDUgMSAxcy0uNDUgMS0xIDEtMS0uNDUtMS0xIC40NS0xIDEtMXptNyAxOEg1VjRoMnYzaDEwVjRoMnYxNnoiLz4KICAgIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-pdf: url(data:image/svg+xml;base64,PHN2ZwogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMiAyMiIgd2lkdGg9IjE2Ij4KICAgIDxwYXRoIHRyYW5zZm9ybT0icm90YXRlKDQ1KSIgY2xhc3M9ImpwLWljb24tc2VsZWN0YWJsZSIgZmlsbD0iI0ZGMkEyQSIKICAgICAgIGQ9Im0gMjIuMzQ0MzY5LC0zLjAxNjM2NDIgaCA1LjYzODYwNCB2IDEuNTc5MjQzMyBoIC0zLjU0OTIyNyB2IDEuNTA4NjkyOTkgaCAzLjMzNzU3NiBWIDEuNjUwODE1NCBoIC0zLjMzNzU3NiB2IDMuNDM1MjYxMyBoIC0yLjA4OTM3NyB6IG0gLTcuMTM2NDQ0LDEuNTc5MjQzMyB2IDQuOTQzOTU0MyBoIDAuNzQ4OTIgcSAxLjI4MDc2MSwwIDEuOTUzNzAzLC0wLjYzNDk1MzUgMC42NzgzNjksLTAuNjM0OTUzNSAwLjY3ODM2OSwtMS44NDUxNjQxIDAsLTEuMjA0NzgzNTUgLTAuNjcyOTQyLC0xLjgzNDMxMDExIC0wLjY3Mjk0MiwtMC42Mjk1MjY1OSAtMS45NTkxMywtMC42Mjk1MjY1OSB6IG0gLTIuMDg5Mzc3LC0xLjU3OTI0MzMgaCAyLjIwMzM0MyBxIDEuODQ1MTY0LDAgMi43NDYwMzksMC4yNjU5MjA3IDAuOTA2MzAxLDAuMjYwNDkzNyAxLjU1MjEwOCwwLjg5MDAyMDMgMC41Njk4MywwLjU0ODEyMjMgMC44NDY2MDUsMS4yNjQ0ODAwNiAwLjI3Njc3NCwwLjcxNjM1NzgxIDAuMjc2Nzc0LDEuNjIyNjU4OTQgMCwwLjkxNzE1NTEgLTAuMjc2Nzc0LDEuNjM4OTM5OSAtMC4yNzY3NzUsMC43MTYzNTc4IC0wLjg0NjYwNSwxLjI2NDQ4IC0wLjY1MTIzNCwwLjYyOTUyNjYgLTEuNTYyOTYyLDAuODk1NDQ3MyAtMC45MTE3MjgsMC4yNjA0OTM3IC0yLjczNTE4NSwwLjI2MDQ5MzcgaCAtMi4yMDMzNDMgeiBtIC04LjE0NTg1NjUsMCBoIDMuNDY3ODIzIHEgMS41NDY2ODE2LDAgMi4zNzE1Nzg1LDAuNjg5MjIzIDAuODMwMzI0LDAuNjgzNzk2MSAwLjgzMDMyNCwxLjk1MzcwMzE0IDAsMS4yNzUzMzM5NyAtMC44MzAzMjQsMS45NjQ1NTcwNiBRIDkuOTg3MTk2MSwyLjI3NDkxNSA4LjQ0MDUxNDUsMi4yNzQ5MTUgSCA3LjA2MjA2ODQgViA1LjA4NjA3NjcgSCA0Ljk3MjY5MTUgWiBtIDIuMDg5Mzc2OSwxLjUxNDExOTkgdiAyLjI2MzAzOTQzIGggMS4xNTU5NDEgcSAwLjYwNzgxODgsMCAwLjkzODg2MjksLTAuMjkzMDU1NDcgMC4zMzEwNDQxLC0wLjI5ODQ4MjQxIDAuMzMxMDQ0MSwtMC44NDExNzc3MiAwLC0wLjU0MjY5NTMxIC0wLjMzMTA0NDEsLTAuODM1NzUwNzQgLTAuMzMxMDQ0MSwtMC4yOTMwNTU1IC0wLjkzODg2MjksLTAuMjkzMDU1NSB6IgovPgo8L3N2Zz4K);
  --jp-icon-python: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iLTEwIC0xMCAxMzEuMTYxMzYxNjk0MzM1OTQgMTMyLjM4ODk5OTkzODk2NDg0Ij4KICA8cGF0aCBjbGFzcz0ianAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjMzA2OTk4IiBkPSJNIDU0LjkxODc4NSw5LjE5Mjc0MjFlLTQgQyA1MC4zMzUxMzIsMC4wMjIyMTcyNyA0NS45NTc4NDYsMC40MTMxMzY5NyA0Mi4xMDYyODUsMS4wOTQ2NjkzIDMwLjc2MDA2OSwzLjA5OTE3MzEgMjguNzAwMDM2LDcuMjk0NzcxNCAyOC43MDAwMzUsMTUuMDMyMTY5IHYgMTAuMjE4NzUgaCAyNi44MTI1IHYgMy40MDYyNSBoIC0yNi44MTI1IC0xMC4wNjI1IGMgLTcuNzkyNDU5LDAgLTE0LjYxNTc1ODgsNC42ODM3MTcgLTE2Ljc0OTk5OTgsMTMuNTkzNzUgLTIuNDYxODE5OTgsMTAuMjEyOTY2IC0yLjU3MTAxNTA4LDE2LjU4NjAyMyAwLDI3LjI1IDEuOTA1OTI4Myw3LjkzNzg1MiA2LjQ1NzU0MzIsMTMuNTkzNzQ4IDE0LjI0OTk5OTgsMTMuNTkzNzUgaCA5LjIxODc1IHYgLTEyLjI1IGMgMCwtOC44NDk5MDIgNy42NTcxNDQsLTE2LjY1NjI0OCAxNi43NSwtMTYuNjU2MjUgaCAyNi43ODEyNSBjIDcuNDU0OTUxLDAgMTMuNDA2MjUzLC02LjEzODE2NCAxMy40MDYyNSwtMTMuNjI1IHYgLTI1LjUzMTI1IGMgMCwtNy4yNjYzMzg2IC02LjEyOTk4LC0xMi43MjQ3NzcxIC0xMy40MDYyNSwtMTMuOTM3NDk5NyBDIDY0LjI4MTU0OCwwLjMyNzk0Mzk3IDU5LjUwMjQzOCwtMC4wMjAzNzkwMyA1NC45MTg3ODUsOS4xOTI3NDIxZS00IFogbSAtMTQuNSw4LjIxODc1MDEyNTc5IGMgMi43Njk1NDcsMCA1LjAzMTI1LDIuMjk4NjQ1NiA1LjAzMTI1LDUuMTI0OTk5NiAtMmUtNiwyLjgxNjMzNiAtMi4yNjE3MDMsNS4wOTM3NSAtNS4wMzEyNSw1LjA5Mzc1IC0yLjc3OTQ3NiwtMWUtNiAtNS4wMzEyNSwtMi4yNzc0MTUgLTUuMDMxMjUsLTUuMDkzNzUgLTEwZS03LC0yLjgyNjM1MyAyLjI1MTc3NCwtNS4xMjQ5OTk2IDUuMDMxMjUsLTUuMTI0OTk5NiB6Ii8+CiAgPHBhdGggY2xhc3M9ImpwLWljb24tc2VsZWN0YWJsZSIgZmlsbD0iI2ZmZDQzYiIgZD0ibSA4NS42Mzc1MzUsMjguNjU3MTY5IHYgMTEuOTA2MjUgYyAwLDkuMjMwNzU1IC03LjgyNTg5NSwxNi45OTk5OTkgLTE2Ljc1LDE3IGggLTI2Ljc4MTI1IGMgLTcuMzM1ODMzLDAgLTEzLjQwNjI0OSw2LjI3ODQ4MyAtMTMuNDA2MjUsMTMuNjI1IHYgMjUuNTMxMjQ3IGMgMCw3LjI2NjM0NCA2LjMxODU4OCwxMS41NDAzMjQgMTMuNDA2MjUsMTMuNjI1MDA0IDguNDg3MzMxLDIuNDk1NjEgMTYuNjI2MjM3LDIuOTQ2NjMgMjYuNzgxMjUsMCA2Ljc1MDE1NSwtMS45NTQzOSAxMy40MDYyNTMsLTUuODg3NjEgMTMuNDA2MjUsLTEzLjYyNTAwNCBWIDg2LjUwMDkxOSBoIC0yNi43ODEyNSB2IC0zLjQwNjI1IGggMjYuNzgxMjUgMTMuNDA2MjU0IGMgNy43OTI0NjEsMCAxMC42OTYyNTEsLTUuNDM1NDA4IDEzLjQwNjI0MSwtMTMuNTkzNzUgMi43OTkzMywtOC4zOTg4ODYgMi42ODAyMiwtMTYuNDc1Nzc2IDAsLTI3LjI1IC0xLjkyNTc4LC03Ljc1NzQ0MSAtNS42MDM4NywtMTMuNTkzNzUgLTEzLjQwNjI0MSwtMTMuNTkzNzUgeiBtIC0xNS4wNjI1LDY0LjY1NjI1IGMgMi43Nzk0NzgsM2UtNiA1LjAzMTI1LDIuMjc3NDE3IDUuMDMxMjUsNS4wOTM3NDcgLTJlLTYsMi44MjYzNTQgLTIuMjUxNzc1LDUuMTI1MDA0IC01LjAzMTI1LDUuMTI1MDA0IC0yLjc2OTU1LDAgLTUuMDMxMjUsLTIuMjk4NjUgLTUuMDMxMjUsLTUuMTI1MDA0IDJlLTYsLTIuODE2MzMgMi4yNjE2OTcsLTUuMDkzNzQ3IDUuMDMxMjUsLTUuMDkzNzQ3IHoiLz4KPC9zdmc+Cg==);
  --jp-icon-r-kernel: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8cGF0aCBjbGFzcz0ianAtaWNvbi1jb250cmFzdDMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjMjE5NkYzIiBkPSJNNC40IDIuNWMxLjItLjEgMi45LS4zIDQuOS0uMyAyLjUgMCA0LjEuNCA1LjIgMS4zIDEgLjcgMS41IDEuOSAxLjUgMy41IDAgMi0xLjQgMy41LTIuOSA0LjEgMS4yLjQgMS43IDEuNiAyLjIgMyAuNiAxLjkgMSAzLjkgMS4zIDQuNmgtMy44Yy0uMy0uNC0uOC0xLjctMS4yLTMuN3MtMS4yLTIuNi0yLjYtMi42aC0uOXY2LjRINC40VjIuNXptMy43IDYuOWgxLjRjMS45IDAgMi45LS45IDIuOS0yLjNzLTEtMi4zLTIuOC0yLjNjLS43IDAtMS4zIDAtMS42LjJ2NC41aC4xdi0uMXoiLz4KPC9zdmc+Cg==);
  --jp-icon-react: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMTUwIDE1MCA1NDEuOSAyOTUuMyI+CiAgPGcgY2xhc3M9ImpwLWljb24tYnJhbmQyIGpwLWljb24tc2VsZWN0YWJsZSIgZmlsbD0iIzYxREFGQiI+CiAgICA8cGF0aCBkPSJNNjY2LjMgMjk2LjVjMC0zMi41LTQwLjctNjMuMy0xMDMuMS04Mi40IDE0LjQtNjMuNiA4LTExNC4yLTIwLjItMTMwLjQtNi41LTMuOC0xNC4xLTUuNi0yMi40LTUuNnYyMi4zYzQuNiAwIDguMy45IDExLjQgMi42IDEzLjYgNy44IDE5LjUgMzcuNSAxNC45IDc1LjctMS4xIDkuNC0yLjkgMTkuMy01LjEgMjkuNC0xOS42LTQuOC00MS04LjUtNjMuNS0xMC45LTEzLjUtMTguNS0yNy41LTM1LjMtNDEuNi01MCAzMi42LTMwLjMgNjMuMi00Ni45IDg0LTQ2LjlWNzhjLTI3LjUgMC02My41IDE5LjYtOTkuOSA1My42LTM2LjQtMzMuOC03Mi40LTUzLjItOTkuOS01My4ydjIyLjNjMjAuNyAwIDUxLjQgMTYuNSA4NCA0Ni42LTE0IDE0LjctMjggMzEuNC00MS4zIDQ5LjktMjIuNiAyLjQtNDQgNi4xLTYzLjYgMTEtMi4zLTEwLTQtMTkuNy01LjItMjktNC43LTM4LjIgMS4xLTY3LjkgMTQuNi03NS44IDMtMS44IDYuOS0yLjYgMTEuNS0yLjZWNzguNWMtOC40IDAtMTYgMS44LTIyLjYgNS42LTI4LjEgMTYuMi0zNC40IDY2LjctMTkuOSAxMzAuMS02Mi4yIDE5LjItMTAyLjcgNDkuOS0xMDIuNyA4Mi4zIDAgMzIuNSA0MC43IDYzLjMgMTAzLjEgODIuNC0xNC40IDYzLjYtOCAxMTQuMiAyMC4yIDEzMC40IDYuNSAzLjggMTQuMSA1LjYgMjIuNSA1LjYgMjcuNSAwIDYzLjUtMTkuNiA5OS45LTUzLjYgMzYuNCAzMy44IDcyLjQgNTMuMiA5OS45IDUzLjIgOC40IDAgMTYtMS44IDIyLjYtNS42IDI4LjEtMTYuMiAzNC40LTY2LjcgMTkuOS0xMzAuMSA2Mi0xOS4xIDEwMi41LTQ5LjkgMTAyLjUtODIuM3ptLTEzMC4yLTY2LjdjLTMuNyAxMi45LTguMyAyNi4yLTEzLjUgMzkuNS00LjEtOC04LjQtMTYtMTMuMS0yNC00LjYtOC05LjUtMTUuOC0xNC40LTIzLjQgMTQuMiAyLjEgMjcuOSA0LjcgNDEgNy45em0tNDUuOCAxMDYuNWMtNy44IDEzLjUtMTUuOCAyNi4zLTI0LjEgMzguMi0xNC45IDEuMy0zMCAyLTQ1LjIgMi0xNS4xIDAtMzAuMi0uNy00NS0xLjktOC4zLTExLjktMTYuNC0yNC42LTI0LjItMzgtNy42LTEzLjEtMTQuNS0yNi40LTIwLjgtMzkuOCA2LjItMTMuNCAxMy4yLTI2LjggMjAuNy0zOS45IDcuOC0xMy41IDE1LjgtMjYuMyAyNC4xLTM4LjIgMTQuOS0xLjMgMzAtMiA0NS4yLTIgMTUuMSAwIDMwLjIuNyA0NSAxLjkgOC4zIDExLjkgMTYuNCAyNC42IDI0LjIgMzggNy42IDEzLjEgMTQuNSAyNi40IDIwLjggMzkuOC02LjMgMTMuNC0xMy4yIDI2LjgtMjAuNyAzOS45em0zMi4zLTEzYzUuNCAxMy40IDEwIDI2LjggMTMuOCAzOS44LTEzLjEgMy4yLTI2LjkgNS45LTQxLjIgOCA0LjktNy43IDkuOC0xNS42IDE0LjQtMjMuNyA0LjYtOCA4LjktMTYuMSAxMy0yNC4xek00MjEuMiA0MzBjLTkuMy05LjYtMTguNi0yMC4zLTI3LjgtMzIgOSAuNCAxOC4yLjcgMjcuNS43IDkuNCAwIDE4LjctLjIgMjcuOC0uNy05IDExLjctMTguMyAyMi40LTI3LjUgMzJ6bS03NC40LTU4LjljLTE0LjItMi4xLTI3LjktNC43LTQxLTcuOSAzLjctMTIuOSA4LjMtMjYuMiAxMy41LTM5LjUgNC4xIDggOC40IDE2IDEzLjEgMjQgNC43IDggOS41IDE1LjggMTQuNCAyMy40ek00MjAuNyAxNjNjOS4zIDkuNiAxOC42IDIwLjMgMjcuOCAzMi05LS40LTE4LjItLjctMjcuNS0uNy05LjQgMC0xOC43LjItMjcuOC43IDktMTEuNyAxOC4zLTIyLjQgMjcuNS0zMnptLTc0IDU4LjljLTQuOSA3LjctOS44IDE1LjYtMTQuNCAyMy43LTQuNiA4LTguOSAxNi0xMyAyNC01LjQtMTMuNC0xMC0yNi44LTEzLjgtMzkuOCAxMy4xLTMuMSAyNi45LTUuOCA0MS4yLTcuOXptLTkwLjUgMTI1LjJjLTM1LjQtMTUuMS01OC4zLTM0LjktNTguMy01MC42IDAtMTUuNyAyMi45LTM1LjYgNTguMy01MC42IDguNi0zLjcgMTgtNyAyNy43LTEwLjEgNS43IDE5LjYgMTMuMiA0MCAyMi41IDYwLjktOS4yIDIwLjgtMTYuNiA0MS4xLTIyLjIgNjAuNi05LjktMy4xLTE5LjMtNi41LTI4LTEwLjJ6TTMxMCA0OTBjLTEzLjYtNy44LTE5LjUtMzcuNS0xNC45LTc1LjcgMS4xLTkuNCAyLjktMTkuMyA1LjEtMjkuNCAxOS42IDQuOCA0MSA4LjUgNjMuNSAxMC45IDEzLjUgMTguNSAyNy41IDM1LjMgNDEuNiA1MC0zMi42IDMwLjMtNjMuMiA0Ni45LTg0IDQ2LjktNC41LS4xLTguMy0xLTExLjMtMi43em0yMzcuMi03Ni4yYzQuNyAzOC4yLTEuMSA2Ny45LTE0LjYgNzUuOC0zIDEuOC02LjkgMi42LTExLjUgMi42LTIwLjcgMC01MS40LTE2LjUtODQtNDYuNiAxNC0xNC43IDI4LTMxLjQgNDEuMy00OS45IDIyLjYtMi40IDQ0LTYuMSA2My42LTExIDIuMyAxMC4xIDQuMSAxOS44IDUuMiAyOS4xem0zOC41LTY2LjdjLTguNiAzLjctMTggNy0yNy43IDEwLjEtNS43LTE5LjYtMTMuMi00MC0yMi41LTYwLjkgOS4yLTIwLjggMTYuNi00MS4xIDIyLjItNjAuNiA5LjkgMy4xIDE5LjMgNi41IDI4LjEgMTAuMiAzNS40IDE1LjEgNTguMyAzNC45IDU4LjMgNTAuNi0uMSAxNS43LTIzIDM1LjYtNTguNCA1MC42ek0zMjAuOCA3OC40eiIvPgogICAgPGNpcmNsZSBjeD0iNDIwLjkiIGN5PSIyOTYuNSIgcj0iNDUuNyIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-redo: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE2Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTE4LjQgMTAuNkMxNi41NSA4Ljk5IDE0LjE1IDggMTEuNSA4Yy00LjY1IDAtOC41OCAzLjAzLTkuOTYgNy4yMkwzLjkgMTZjMS4wNS0zLjE5IDQuMDUtNS41IDcuNi01LjUgMS45NSAwIDMuNzMuNzIgNS4xMiAxLjg4TDEzIDE2aDlWN2wtMy42IDMuNnoiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-refresh: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTkgMTMuNWMtMi40OSAwLTQuNS0yLjAxLTQuNS00LjVTNi41MSA0LjUgOSA0LjVjMS4yNCAwIDIuMzYuNTIgMy4xNyAxLjMzTDEwIDhoNVYzbC0xLjc2IDEuNzZDMTIuMTUgMy42OCAxMC42NiAzIDkgMyA1LjY5IDMgMy4wMSA1LjY5IDMuMDEgOVM1LjY5IDE1IDkgMTVjMi45NyAwIDUuNDMtMi4xNiA1LjktNWgtMS41MmMtLjQ2IDItMi4yNCAzLjUtNC4zOCAzLjV6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-regex: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIwIDIwIj4KICA8ZyBjbGFzcz0ianAtaWNvbjIiIGZpbGw9IiM0MTQxNDEiPgogICAgPHJlY3QgeD0iMiIgeT0iMiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ii8+CiAgPC9nPgoKICA8ZyBjbGFzcz0ianAtaWNvbi1hY2NlbnQyIiBmaWxsPSIjRkZGIj4KICAgIDxjaXJjbGUgY2xhc3M9InN0MiIgY3g9IjUuNSIgY3k9IjE0LjUiIHI9IjEuNSIvPgogICAgPHJlY3QgeD0iMTIiIHk9IjQiIGNsYXNzPSJzdDIiIHdpZHRoPSIxIiBoZWlnaHQ9IjgiLz4KICAgIDxyZWN0IHg9IjguNSIgeT0iNy41IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjg2NiAtMC41IDAuNSAwLjg2NiAtMi4zMjU1IDcuMzIxOSkiIGNsYXNzPSJzdDIiIHdpZHRoPSI4IiBoZWlnaHQ9IjEiLz4KICAgIDxyZWN0IHg9IjEyIiB5PSI0IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjUgLTAuODY2IDAuODY2IDAuNSAtMC42Nzc5IDE0LjgyNTIpIiBjbGFzcz0ic3QyIiB3aWR0aD0iMSIgaGVpZ2h0PSI4Ii8+CiAgPC9nPgo8L3N2Zz4K);
  --jp-icon-run: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTggNXYxNGwxMS03eiIvPgogICAgPC9nPgo8L3N2Zz4K);
  --jp-icon-running: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDUxMiA1MTIiPgogIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICA8cGF0aCBkPSJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHptOTYgMzI4YzAgOC44LTcuMiAxNi0xNiAxNkgxNzZjLTguOCAwLTE2LTcuMi0xNi0xNlYxNzZjMC04LjggNy4yLTE2IDE2LTE2aDE2MGM4LjggMCAxNiA3LjIgMTYgMTZ2MTYweiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-save: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTE3IDNINWMtMS4xMSAwLTIgLjktMiAydjE0YzAgMS4xLjg5IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjdsLTQtNHptLTUgMTZjLTEuNjYgMC0zLTEuMzQtMy0zczEuMzQtMyAzLTMgMyAxLjM0IDMgMy0xLjM0IDMtMyAzem0zLTEwSDVWNWgxMHY0eiIvPgogICAgPC9nPgo8L3N2Zz4K);
  --jp-icon-search: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTggMTgiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTEyLjEsMTAuOWgtMC43bC0wLjItMC4yYzAuOC0wLjksMS4zLTIuMiwxLjMtMy41YzAtMy0yLjQtNS40LTUuNC01LjRTMS44LDQuMiwxLjgsNy4xczIuNCw1LjQsNS40LDUuNCBjMS4zLDAsMi41LTAuNSwzLjUtMS4zbDAuMiwwLjJ2MC43bDQuMSw0LjFsMS4yLTEuMkwxMi4xLDEwLjl6IE03LjEsMTAuOWMtMi4xLDAtMy43LTEuNy0zLjctMy43czEuNy0zLjcsMy43LTMuN3MzLjcsMS43LDMuNywzLjcgUzkuMiwxMC45LDcuMSwxMC45eiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-settings: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIiBkPSJNMTkuNDMgMTIuOThjLjA0LS4zMi4wNy0uNjQuMDctLjk4cy0uMDMtLjY2LS4wNy0uOThsMi4xMS0xLjY1Yy4xOS0uMTUuMjQtLjQyLjEyLS42NGwtMi0zLjQ2Yy0uMTItLjIyLS4zOS0uMy0uNjEtLjIybC0yLjQ5IDFjLS41Mi0uNC0xLjA4LS43My0xLjY5LS45OGwtLjM4LTIuNjVBLjQ4OC40ODggMCAwMDE0IDJoLTRjLS4yNSAwLS40Ni4xOC0uNDkuNDJsLS4zOCAyLjY1Yy0uNjEuMjUtMS4xNy41OS0xLjY5Ljk4bC0yLjQ5LTFjLS4yMy0uMDktLjQ5IDAtLjYxLjIybC0yIDMuNDZjLS4xMy4yMi0uMDcuNDkuMTIuNjRsMi4xMSAxLjY1Yy0uMDQuMzItLjA3LjY1LS4wNy45OHMuMDMuNjYuMDcuOThsLTIuMTEgMS42NWMtLjE5LjE1LS4yNC40Mi0uMTIuNjRsMiAzLjQ2Yy4xMi4yMi4zOS4zLjYxLjIybDIuNDktMWMuNTIuNCAxLjA4LjczIDEuNjkuOThsLjM4IDIuNjVjLjAzLjI0LjI0LjQyLjQ5LjQyaDRjLjI1IDAgLjQ2LS4xOC40OS0uNDJsLjM4LTIuNjVjLjYxLS4yNSAxLjE3LS41OSAxLjY5LS45OGwyLjQ5IDFjLjIzLjA5LjQ5IDAgLjYxLS4yMmwyLTMuNDZjLjEyLS4yMi4wNy0uNDktLjEyLS42NGwtMi4xMS0xLjY1ek0xMiAxNS41Yy0xLjkzIDAtMy41LTEuNTctMy41LTMuNXMxLjU3LTMuNSAzLjUtMy41IDMuNSAxLjU3IDMuNSAzLjUtMS41NyAzLjUtMy41IDMuNXoiLz4KPC9zdmc+Cg==);
  --jp-icon-share: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTSAxOCAyIEMgMTYuMzU0OTkgMiAxNSAzLjM1NDk5MDQgMTUgNSBDIDE1IDUuMTkwOTUyOSAxNS4wMjE3OTEgNS4zNzcxMjI0IDE1LjA1NjY0MSA1LjU1ODU5MzggTCA3LjkyMTg3NSA5LjcyMDcwMzEgQyA3LjM5ODUzOTkgOS4yNzc4NTM5IDYuNzMyMDc3MSA5IDYgOSBDIDQuMzU0OTkwNCA5IDMgMTAuMzU0OTkgMyAxMiBDIDMgMTMuNjQ1MDEgNC4zNTQ5OTA0IDE1IDYgMTUgQyA2LjczMjA3NzEgMTUgNy4zOTg1Mzk5IDE0LjcyMjE0NiA3LjkyMTg3NSAxNC4yNzkyOTcgTCAxNS4wNTY2NDEgMTguNDM5NDUzIEMgMTUuMDIxNTU1IDE4LjYyMTUxNCAxNSAxOC44MDgzODYgMTUgMTkgQyAxNSAyMC42NDUwMSAxNi4zNTQ5OSAyMiAxOCAyMiBDIDE5LjY0NTAxIDIyIDIxIDIwLjY0NTAxIDIxIDE5IEMgMjEgMTcuMzU0OTkgMTkuNjQ1MDEgMTYgMTggMTYgQyAxNy4yNjc0OCAxNiAxNi42MDE1OTMgMTYuMjc5MzI4IDE2LjA3ODEyNSAxNi43MjI2NTYgTCA4Ljk0MzM1OTQgMTIuNTU4NTk0IEMgOC45NzgyMDk1IDEyLjM3NzEyMiA5IDEyLjE5MDk1MyA5IDEyIEMgOSAxMS44MDkwNDcgOC45NzgyMDk1IDExLjYyMjg3OCA4Ljk0MzM1OTQgMTEuNDQxNDA2IEwgMTYuMDc4MTI1IDcuMjc5Mjk2OSBDIDE2LjYwMTQ2IDcuNzIyMTQ2MSAxNy4yNjc5MjMgOCAxOCA4IEMgMTkuNjQ1MDEgOCAyMSA2LjY0NTAwOTYgMjEgNSBDIDIxIDMuMzU0OTkwNCAxOS42NDUwMSAyIDE4IDIgeiBNIDE4IDQgQyAxOC41NjQxMjkgNCAxOSA0LjQzNTg3MDYgMTkgNSBDIDE5IDUuNTY0MTI5NCAxOC41NjQxMjkgNiAxOCA2IEMgMTcuNDM1ODcxIDYgMTcgNS41NjQxMjk0IDE3IDUgQyAxNyA0LjQzNTg3MDYgMTcuNDM1ODcxIDQgMTggNCB6IE0gNiAxMSBDIDYuNTY0MTI5NCAxMSA3IDExLjQzNTg3MSA3IDEyIEMgNyAxMi41NjQxMjkgNi41NjQxMjk0IDEzIDYgMTMgQyA1LjQzNTg3MDYgMTMgNSAxMi41NjQxMjkgNSAxMiBDIDUgMTEuNDM1ODcxIDUuNDM1ODcwNiAxMSA2IDExIHogTSAxOCAxOCBDIDE4LjU2NDEyOSAxOCAxOSAxOC40MzU4NzEgMTkgMTkgQyAxOSAxOS41NjQxMjkgMTguNTY0MTI5IDIwIDE4IDIwIEMgMTcuNDM1ODcxIDIwIDE3IDE5LjU2NDEyOSAxNyAxOSBDIDE3IDE4LjQzNTg3MSAxNy40MzU4NzEgMTggMTggMTggeiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-spreadsheet: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8cGF0aCBjbGFzcz0ianAtaWNvbi1jb250cmFzdDEganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNENBRjUwIiBkPSJNMi4yIDIuMnYxNy42aDE3LjZWMi4ySDIuMnptMTUuNCA3LjdoLTUuNVY0LjRoNS41djUuNXpNOS45IDQuNHY1LjVINC40VjQuNGg1LjV6bS01LjUgNy43aDUuNXY1LjVINC40di01LjV6bTcuNyA1LjV2LTUuNWg1LjV2NS41aC01LjV6Ii8+Cjwvc3ZnPgo=);
  --jp-icon-stop: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPgogICAgICAgIDxwYXRoIGQ9Ik02IDZoMTJ2MTJINnoiLz4KICAgIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-tab: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTIxIDNIM2MtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxOGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yem0wIDE2SDNWNWgxMHY0aDh2MTB6Ii8+CiAgPC9nPgo8L3N2Zz4K);
  --jp-icon-table-rows: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPgogICAgICAgIDxwYXRoIGQ9Ik0yMSw4SDNWNGgxOFY4eiBNMjEsMTBIM3Y0aDE4VjEweiBNMjEsMTZIM3Y0aDE4VjE2eiIvPgogICAgPC9nPgo8L3N2Zz4K);
  --jp-icon-tag: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCA0MyAyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CgkJPHBhdGggZD0iTTI4LjgzMzIgMTIuMzM0TDMyLjk5OTggMTYuNTAwN0wzNy4xNjY1IDEyLjMzNEgyOC44MzMyWiIvPgoJCTxwYXRoIGQ9Ik0xNi4yMDk1IDIxLjYxMDRDMTUuNjg3MyAyMi4xMjk5IDE0Ljg0NDMgMjIuMTI5OSAxNC4zMjQ4IDIxLjYxMDRMNi45ODI5IDE0LjcyNDVDNi41NzI0IDE0LjMzOTQgNi4wODMxMyAxMy42MDk4IDYuMDQ3ODYgMTMuMDQ4MkM1Ljk1MzQ3IDExLjUyODggNi4wMjAwMiA4LjYxOTQ0IDYuMDY2MjEgNy4wNzY5NUM2LjA4MjgxIDYuNTE0NzcgNi41NTU0OCA2LjA0MzQ3IDcuMTE4MDQgNi4wMzA1NUM5LjA4ODYzIDUuOTg0NzMgMTMuMjYzOCA1LjkzNTc5IDEzLjY1MTggNi4zMjQyNUwyMS43MzY5IDEzLjYzOUMyMi4yNTYgMTQuMTU4NSAyMS43ODUxIDE1LjQ3MjQgMjEuMjYyIDE1Ljk5NDZMMTYuMjA5NSAyMS42MTA0Wk05Ljc3NTg1IDguMjY1QzkuMzM1NTEgNy44MjU2NiA4LjYyMzUxIDcuODI1NjYgOC4xODI4IDguMjY1QzcuNzQzNDYgOC43MDU3MSA3Ljc0MzQ2IDkuNDE3MzMgOC4xODI4IDkuODU2NjdDOC42MjM4MiAxMC4yOTY0IDkuMzM1ODIgMTAuMjk2NCA5Ljc3NTg1IDkuODU2NjdDMTAuMjE1NiA5LjQxNzMzIDEwLjIxNTYgOC43MDUzMyA5Ljc3NTg1IDguMjY1WiIvPgoJPC9nPgo8L3N2Zz4K);
  --jp-icon-terminal: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiA+CiAgICA8cmVjdCBjbGFzcz0ianAtdGVybWluYWwtaWNvbi1iYWNrZ3JvdW5kLWNvbG9yIGpwLWljb24tc2VsZWN0YWJsZSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyIDIpIiBmaWxsPSIjMzMzMzMzIi8+CiAgICA8cGF0aCBjbGFzcz0ianAtdGVybWluYWwtaWNvbi1jb2xvciBqcC1pY29uLXNlbGVjdGFibGUtaW52ZXJzZSIgZD0iTTUuMDU2NjQgOC43NjE3MkM1LjA1NjY0IDguNTk3NjYgNS4wMzEyNSA4LjQ1MzEyIDQuOTgwNDcgOC4zMjgxMkM0LjkzMzU5IDguMTk5MjIgNC44NTU0NyA4LjA4MjAzIDQuNzQ2MDkgNy45NzY1NkM0LjY0MDYyIDcuODcxMDkgNC41IDcuNzc1MzkgNC4zMjQyMiA3LjY4OTQ1QzQuMTUyMzQgNy41OTk2MSAzLjk0MzM2IDcuNTExNzIgMy42OTcyNyA3LjQyNTc4QzMuMzAyNzMgNy4yODUxNiAyLjk0MzM2IDcuMTM2NzIgMi42MTkxNCA2Ljk4MDQ3QzIuMjk0OTIgNi44MjQyMiAyLjAxNzU4IDYuNjQyNTggMS43ODcxMSA2LjQzNTU1QzEuNTYwNTUgNi4yMjg1MiAxLjM4NDc3IDUuOTg4MjggMS4yNTk3NyA1LjcxNDg0QzEuMTM0NzcgNS40Mzc1IDEuMDcyMjcgNS4xMDkzOCAxLjA3MjI3IDQuNzMwNDdDMS4wNzIyNyA0LjM5ODQ0IDEuMTI4OTEgNC4wOTU3IDEuMjQyMTkgMy44MjIyN0MxLjM1NTQ3IDMuNTQ0OTIgMS41MTU2MiAzLjMwNDY5IDEuNzIyNjYgMy4xMDE1NkMxLjkyOTY5IDIuODk4NDQgMi4xNzk2OSAyLjczNDM3IDIuNDcyNjYgMi42MDkzOEMyLjc2NTYyIDIuNDg0MzggMy4wOTE4IDIuNDA0MyAzLjQ1MTE3IDIuMzY5MTRWMS4xMDkzOEg0LjM4ODY3VjIuMzgwODZDNC43NDAyMyAyLjQyNzczIDUuMDU2NjQgMi41MjM0NCA1LjMzNzg5IDIuNjY3OTdDNS42MTkxNCAyLjgxMjUgNS44NTc0MiAzLjAwMTk1IDYuMDUyNzMgMy4yMzYzM0M2LjI1MTk1IDMuNDY2OCA2LjQwNDMgMy43NDAyMyA2LjUwOTc3IDQuMDU2NjRDNi42MTkxNCA0LjM2OTE0IDYuNjczODMgNC43MjA3IDYuNjczODMgNS4xMTEzM0g1LjA0NDkyQzUuMDQ0OTIgNC42Mzg2NyA0LjkzNzUgNC4yODEyNSA0LjcyMjY2IDQuMDM5MDZDNC41MDc4MSAzLjc5Mjk3IDQuMjE2OCAzLjY2OTkyIDMuODQ5NjEgMy42Njk5MkMzLjY1MDM5IDMuNjY5OTIgMy40NzY1NiAzLjY5NzI3IDMuMzI4MTIgMy43NTE5NUMzLjE4MzU5IDMuODAyNzMgMy4wNjQ0NSAzLjg3Njk1IDIuOTcwNyAzLjk3NDYxQzIuODc2OTUgNC4wNjgzNiAyLjgwNjY0IDQuMTc5NjkgMi43NTk3NyA0LjMwODU5QzIuNzE2OCA0LjQzNzUgMi42OTUzMSA0LjU3ODEyIDIuNjk1MzEgNC43MzA0N0MyLjY5NTMxIDQuODgyODEgMi43MTY4IDUuMDE5NTMgMi43NTk3NyA1LjE0MDYyQzIuODA2NjQgNS4yNTc4MSAyLjg4MjgxIDUuMzY3MTkgMi45ODgyOCA1LjQ2ODc1QzMuMDk3NjYgNS41NzAzMSAzLjI0MDIzIDUuNjY3OTcgMy40MTYwMiA1Ljc2MTcyQzMuNTkxOCA1Ljg1MTU2IDMuODEwNTUgNS45NDMzNiA0LjA3MjI3IDYuMDM3MTFDNC40NjY4IDYuMTg1NTUgNC44MjQyMiA2LjMzOTg0IDUuMTQ0NTMgNi41QzUuNDY0ODQgNi42NTYyNSA1LjczODI4IDYuODM5ODQgNS45NjQ4NCA3LjA1MDc4QzYuMTk1MzEgNy4yNTc4MSA2LjM3MTA5IDcuNSA2LjQ5MjE5IDcuNzc3MzRDNi42MTcxOSA4LjA1MDc4IDYuNjc5NjkgOC4zNzUgNi42Nzk2OSA4Ljc1QzYuNjc5NjkgOS4wOTM3NSA2LjYyMzA1IDkuNDA0MyA2LjUwOTc3IDkuNjgxNjRDNi4zOTY0OCA5Ljk1NTA4IDYuMjM0MzggMTAuMTkxNCA2LjAyMzQ0IDEwLjM5MDZDNS44MTI1IDEwLjU4OTggNS41NTg1OSAxMC43NSA1LjI2MTcyIDEwLjg3MTFDNC45NjQ4NCAxMC45ODgzIDQuNjMyODEgMTEuMDY0NSA0LjI2NTYyIDExLjA5OTZWMTIuMjQ4SDMuMzMzOThWMTEuMDk5NkMzLjAwMTk1IDExLjA2ODQgMi42Nzk2OSAxMC45OTYxIDIuMzY3MTkgMTAuODgyOEMyLjA1NDY5IDEwLjc2NTYgMS43NzczNCAxMC41OTc3IDEuNTM1MTYgMTAuMzc4OUMxLjI5Njg4IDEwLjE2MDIgMS4xMDU0NyA5Ljg4NDc3IDAuOTYwOTM4IDkuNTUyNzNDMC44MTY0MDYgOS4yMTY4IDAuNzQ0MTQxIDguODE0NDUgMC43NDQxNDEgOC4zNDU3SDIuMzc4OTFDMi4zNzg5MSA4LjYyNjk1IDIuNDE5OTIgOC44NjMyOCAyLjUwMTk1IDkuMDU0NjlDMi41ODM5OCA5LjI0MjE5IDIuNjg5NDUgOS4zOTI1OCAyLjgxODM2IDkuNTA1ODZDMi45NTExNyA5LjYxNTIzIDMuMTAxNTYgOS42OTMzNiAzLjI2OTUzIDkuNzQwMjNDMy40Mzc1IDkuNzg3MTEgMy42MDkzOCA5LjgxMDU1IDMuNzg1MTYgOS44MTA1NUM0LjIwMzEyIDkuODEwNTUgNC41MTk1MyA5LjcxMjg5IDQuNzM0MzggOS41MTc1OEM0Ljk0OTIyIDkuMzIyMjcgNS4wNTY2NCA5LjA3MDMxIDUuMDU2NjQgOC43NjE3MlpNMTMuNDE4IDEyLjI3MTVIOC4wNzQyMlYxMUgxMy40MThWMTIuMjcxNVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMuOTUyNjQgNikiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=);
  --jp-icon-text-editor: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBjbGFzcz0ianAtdGV4dC1lZGl0b3ItaWNvbi1jb2xvciBqcC1pY29uLXNlbGVjdGFibGUiIGZpbGw9IiM2MTYxNjEiIGQ9Ik0xNSAxNUgzdjJoMTJ2LTJ6bTAtOEgzdjJoMTJWN3pNMyAxM2gxOHYtMkgzdjJ6bTAgOGgxOHYtMkgzdjJ6TTMgM3YyaDE4VjNIM3oiLz4KPC9zdmc+Cg==);
  --jp-icon-toc: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIj4KICAgIDxwYXRoIGQ9Ik03LDVIMjFWN0g3VjVNNywxM1YxMUgyMVYxM0g3TTQsNC41QTEuNSwxLjUgMCAwLDEgNS41LDZBMS41LDEuNSAwIDAsMSA0LDcuNUExLjUsMS41IDAgMCwxIDIuNSw2QTEuNSwxLjUgMCAwLDEgNCw0LjVNNCwxMC41QTEuNSwxLjUgMCAwLDEgNS41LDEyQTEuNSwxLjUgMCAwLDEgNCwxMy41QTEuNSwxLjUgMCAwLDEgMi41LDEyQTEuNSwxLjUgMCAwLDEgNCwxMC41TTcsMTlWMTdIMjFWMTlIN000LDE2LjVBMS41LDEuNSAwIDAsMSA1LjUsMThBMS41LDEuNSAwIDAsMSA0LDE5LjVBMS41LDEuNSAwIDAsMSAyLjUsMThBMS41LDEuNSAwIDAsMSA0LDE2LjVaIiAvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-tree-view: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPgogICAgICAgIDxwYXRoIGQ9Ik0yMiAxMVYzaC03djNIOVYzSDJ2OGg3VjhoMnYxMGg0djNoN3YtOGgtN3YzaC0yVjhoMnYzeiIvPgogICAgPC9nPgo8L3N2Zz4K);
  --jp-icon-trusted: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI1Ij4KICAgIDxwYXRoIGNsYXNzPSJqcC1pY29uMiIgc3Ryb2tlPSIjMzMzMzMzIiBzdHJva2Utd2lkdGg9IjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIgMykiIGQ9Ik0xLjg2MDk0IDExLjQ0MDlDMC44MjY0NDggOC43NzAyNyAwLjg2Mzc3OSA2LjA1NzY0IDEuMjQ5MDcgNC4xOTkzMkMyLjQ4MjA2IDMuOTMzNDcgNC4wODA2OCAzLjQwMzQ3IDUuNjAxMDIgMi44NDQ5QzcuMjM1NDkgMi4yNDQ0IDguODU2NjYgMS41ODE1IDkuOTg3NiAxLjA5NTM5QzExLjA1OTcgMS41ODM0MSAxMi42MDk0IDIuMjQ0NCAxNC4yMTggMi44NDMzOUMxNS43NTAzIDMuNDEzOTQgMTcuMzk5NSAzLjk1MjU4IDE4Ljc1MzkgNC4yMTM4NUMxOS4xMzY0IDYuMDcxNzcgMTkuMTcwOSA4Ljc3NzIyIDE4LjEzOSAxMS40NDA5QzE3LjAzMDMgMTQuMzAzMiAxNC42NjY4IDE3LjE4NDQgOS45OTk5OSAxOC45MzU0QzUuMzMzMiAxNy4xODQ0IDIuOTY5NjggMTQuMzAzMiAxLjg2MDk0IDExLjQ0MDlaIi8+CiAgICA8cGF0aCBjbGFzcz0ianAtaWNvbjIiIGZpbGw9IiMzMzMzMzMiIHN0cm9rZT0iIzMzMzMzMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOCA5Ljg2NzE5KSIgZD0iTTIuODYwMTUgNC44NjUzNUwwLjcyNjU0OSAyLjk5OTU5TDAgMy42MzA0NUwyLjg2MDE1IDYuMTMxNTdMOCAwLjYzMDg3Mkw3LjI3ODU3IDBMMi44NjAxNSA0Ljg2NTM1WiIvPgo8L3N2Zz4K);
  --jp-icon-undo: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTEyLjUgOGMtMi42NSAwLTUuMDUuOTktNi45IDIuNkwyIDd2OWg5bC0zLjYyLTMuNjJjMS4zOS0xLjE2IDMuMTYtMS44OCA1LjEyLTEuODggMy41NCAwIDYuNTUgMi4zMSA3LjYgNS41bDIuMzctLjc4QzIxLjA4IDExLjAzIDE3LjE1IDggMTIuNSA4eiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-user: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTE2IDdhNCA0IDAgMTEtOCAwIDQgNCAwIDAxOCAwek0xMiAxNGE3IDcgMCAwMC03IDdoMTRhNyA3IDAgMDAtNy03eiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-users: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDM2IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGcgY2xhc3M9ImpwLWljb24zIiB0cmFuc2Zvcm09Im1hdHJpeCgxLjczMjcgMCAwIDEuNzMyNyAtMy42MjgyIC4wOTk1NzcpIiBmaWxsPSIjNjE2MTYxIj4KICA8cGF0aCB0cmFuc2Zvcm09Im1hdHJpeCgxLjUsMCwwLDEuNSwwLC02KSIgZD0ibTEyLjE4NiA3LjUwOThjLTEuMDUzNSAwLTEuOTc1NyAwLjU2NjUtMi40Nzg1IDEuNDEwMiAwLjc1MDYxIDAuMzEyNzcgMS4zOTc0IDAuODI2NDggMS44NzMgMS40NzI3aDMuNDg2M2MwLTEuNTkyLTEuMjg4OS0yLjg4MjgtMi44ODA5LTIuODgyOHoiLz4KICA8cGF0aCBkPSJtMjAuNDY1IDIuMzg5NWEyLjE4ODUgMi4xODg1IDAgMCAxLTIuMTg4NCAyLjE4ODUgMi4xODg1IDIuMTg4NSAwIDAgMS0yLjE4ODUtMi4xODg1IDIuMTg4NSAyLjE4ODUgMCAwIDEgMi4xODg1LTIuMTg4NSAyLjE4ODUgMi4xODg1IDAgMCAxIDIuMTg4NCAyLjE4ODV6Ii8+CiAgPHBhdGggdHJhbnNmb3JtPSJtYXRyaXgoMS41LDAsMCwxLjUsMCwtNikiIGQ9Im0zLjU4OTggOC40MjE5Yy0xLjExMjYgMC0yLjAxMzcgMC45MDExMS0yLjAxMzcgMi4wMTM3aDIuODE0NWMwLjI2Nzk3LTAuMzczMDkgMC41OTA3LTAuNzA0MzUgMC45NTg5OC0wLjk3ODUyLTAuMzQ0MzMtMC42MTY4OC0xLjAwMzEtMS4wMzUyLTEuNzU5OC0xLjAzNTJ6Ii8+CiAgPHBhdGggZD0ibTYuOTE1NCA0LjYyM2ExLjUyOTQgMS41Mjk0IDAgMCAxLTEuNTI5NCAxLjUyOTQgMS41Mjk0IDEuNTI5NCAwIDAgMS0xLjUyOTQtMS41Mjk0IDEuNTI5NCAxLjUyOTQgMCAwIDEgMS41Mjk0LTEuNTI5NCAxLjUyOTQgMS41Mjk0IDAgMCAxIDEuNTI5NCAxLjUyOTR6Ii8+CiAgPHBhdGggZD0ibTYuMTM1IDEzLjUzNWMwLTMuMjM5MiAyLjYyNTktNS44NjUgNS44NjUtNS44NjUgMy4yMzkyIDAgNS44NjUgMi42MjU5IDUuODY1IDUuODY1eiIvPgogIDxjaXJjbGUgY3g9IjEyIiBjeT0iMy43Njg1IiByPSIyLjk2ODUiLz4KIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-vega: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8ZyBjbGFzcz0ianAtaWNvbjEganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjMjEyMTIxIj4KICAgIDxwYXRoIGQ9Ik0xMC42IDUuNGwyLjItMy4ySDIuMnY3LjNsNC02LjZ6Ii8+CiAgICA8cGF0aCBkPSJNMTUuOCAyLjJsLTQuNCA2LjZMNyA2LjNsLTQuOCA4djUuNWgxNy42VjIuMmgtNHptLTcgMTUuNEg1LjV2LTQuNGgzLjN2NC40em00LjQgMEg5LjhWOS44aDMuNHY3Ljh6bTQuNCAwaC0zLjRWNi41aDMuNHYxMS4xeiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-word: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIwIDIwIj4KIDxnIGNsYXNzPSJqcC1pY29uMiIgZmlsbD0iIzQxNDE0MSI+CiAgPHJlY3QgeD0iMiIgeT0iMiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ii8+CiA8L2c+CiA8ZyBjbGFzcz0ianAtaWNvbi1hY2NlbnQyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSguNDMgLjA0MDEpIiBmaWxsPSIjZmZmIj4KICA8cGF0aCBkPSJtNC4xNCA4Ljc2cTAuMDY4Mi0xLjg5IDIuNDItMS44OSAxLjE2IDAgMS42OCAwLjQyIDAuNTY3IDAuNDEgMC41NjcgMS4xNnYzLjQ3cTAgMC40NjIgMC41MTQgMC40NjIgMC4xMDMgMCAwLjItMC4wMjMxdjAuNzE0cS0wLjM5OSAwLjEwMy0wLjY1MSAwLjEwMy0wLjQ1MiAwLTAuNjkzLTAuMjItMC4yMzEtMC4yLTAuMjg0LTAuNjYyLTAuOTU2IDAuODcyLTIgMC44NzItMC45MDMgMC0xLjQ3LTAuNDcyLTAuNTI1LTAuNDcyLTAuNTI1LTEuMjYgMC0wLjI2MiAwLjA0NTItMC40NzIgMC4wNTY3LTAuMjIgMC4xMTYtMC4zNzggMC4wNjgyLTAuMTY4IDAuMjMxLTAuMzA0IDAuMTU4LTAuMTQ3IDAuMjYyLTAuMjQyIDAuMTE2LTAuMDkxNCAwLjM2OC0wLjE2OCAwLjI2Mi0wLjA5MTQgMC4zOTktMC4xMjYgMC4xMzYtMC4wNDUyIDAuNDcyLTAuMTAzIDAuMzM2LTAuMDU3OCAwLjUwNC0wLjA3OTggMC4xNTgtMC4wMjMxIDAuNTY3LTAuMDc5OCAwLjU1Ni0wLjA2ODIgMC43NzctMC4yMjEgMC4yMi0wLjE1MiAwLjIyLTAuNDQxdi0wLjI1MnEwLTAuNDMtMC4zNTctMC42NjItMC4zMzYtMC4yMzEtMC45NzYtMC4yMzEtMC42NjIgMC0wLjk5OCAwLjI2Mi0wLjMzNiAwLjI1Mi0wLjM5OSAwLjc5OHptMS44OSAzLjY4cTAuNzg4IDAgMS4yNi0wLjQxIDAuNTA0LTAuNDIgMC41MDQtMC45MDN2LTEuMDVxLTAuMjg0IDAuMTM2LTAuODYxIDAuMjMxLTAuNTY3IDAuMDkxNC0wLjk4NyAwLjE1OC0wLjQyIDAuMDY4Mi0wLjc2NiAwLjMyNi0wLjMzNiAwLjI1Mi0wLjMzNiAwLjcwNHQwLjMwNCAwLjcwNCAwLjg2MSAwLjI1MnoiIHN0cm9rZS13aWR0aD0iMS4wNSIvPgogIDxwYXRoIGQ9Im0xMCA0LjU2aDAuOTQ1djMuMTVxMC42NTEtMC45NzYgMS44OS0wLjk3NiAxLjE2IDAgMS44OSAwLjg0IDAuNjgyIDAuODQgMC42ODIgMi4zMSAwIDEuNDctMC43MDQgMi40Mi0wLjcwNCAwLjg4Mi0xLjg5IDAuODgyLTEuMjYgMC0xLjg5LTEuMDJ2MC43NjZoLTAuODV6bTIuNjIgMy4wNHEtMC43NDYgMC0xLjE2IDAuNjQtMC40NTIgMC42My0wLjQ1MiAxLjY4IDAgMS4wNSAwLjQ1MiAxLjY4dDEuMTYgMC42M3EwLjc3NyAwIDEuMjYtMC42MyAwLjQ5NC0wLjY0IDAuNDk0LTEuNjggMC0xLjA1LTAuNDcyLTEuNjgtMC40NjItMC42NC0xLjI2LTAuNjR6IiBzdHJva2Utd2lkdGg9IjEuMDUiLz4KICA8cGF0aCBkPSJtMi43MyAxNS44IDEzLjYgMC4wMDgxYzAuMDA2OSAwIDAtMi42IDAtMi42IDAtMC4wMDc4LTEuMTUgMC0xLjE1IDAtMC4wMDY5IDAtMC4wMDgzIDEuNS0wLjAwODMgMS41LTJlLTMgLTAuMDAxNC0xMS4zLTAuMDAxNC0xMS4zLTAuMDAxNGwtMC4wMDU5Mi0xLjVjMC0wLjAwNzgtMS4xNyAwLjAwMTMtMS4xNyAwLjAwMTN6IiBzdHJva2Utd2lkdGg9Ii45NzUiLz4KIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-yaml: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8ZyBjbGFzcz0ianAtaWNvbi1jb250cmFzdDIganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjRDgxQjYwIj4KICAgIDxwYXRoIGQ9Ik03LjIgMTguNnYtNS40TDMgNS42aDMuM2wxLjQgMy4xYy4zLjkuNiAxLjYgMSAyLjUuMy0uOC42LTEuNiAxLTIuNWwxLjQtMy4xaDMuNGwtNC40IDcuNnY1LjVsLTIuOS0uMXoiLz4KICAgIDxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjE3LjYiIGN5PSIxNi41IiByPSIyLjEiLz4KICAgIDxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjE3LjYiIGN5PSIxMSIgcj0iMi4xIi8+CiAgPC9nPgo8L3N2Zz4K);
}

/* Icon CSS class declarations */

.jp-AddAboveIcon {
  background-image: var(--jp-icon-add-above);
}

.jp-AddBelowIcon {
  background-image: var(--jp-icon-add-below);
}

.jp-AddIcon {
  background-image: var(--jp-icon-add);
}

.jp-BellIcon {
  background-image: var(--jp-icon-bell);
}

.jp-BugDotIcon {
  background-image: var(--jp-icon-bug-dot);
}

.jp-BugIcon {
  background-image: var(--jp-icon-bug);
}

.jp-BuildIcon {
  background-image: var(--jp-icon-build);
}

.jp-CaretDownEmptyIcon {
  background-image: var(--jp-icon-caret-down-empty);
}

.jp-CaretDownEmptyThinIcon {
  background-image: var(--jp-icon-caret-down-empty-thin);
}

.jp-CaretDownIcon {
  background-image: var(--jp-icon-caret-down);
}

.jp-CaretLeftIcon {
  background-image: var(--jp-icon-caret-left);
}

.jp-CaretRightIcon {
  background-image: var(--jp-icon-caret-right);
}

.jp-CaretUpEmptyThinIcon {
  background-image: var(--jp-icon-caret-up-empty-thin);
}

.jp-CaretUpIcon {
  background-image: var(--jp-icon-caret-up);
}

.jp-CaseSensitiveIcon {
  background-image: var(--jp-icon-case-sensitive);
}

.jp-CheckIcon {
  background-image: var(--jp-icon-check);
}

.jp-CircleEmptyIcon {
  background-image: var(--jp-icon-circle-empty);
}

.jp-CircleIcon {
  background-image: var(--jp-icon-circle);
}

.jp-ClearIcon {
  background-image: var(--jp-icon-clear);
}

.jp-CloseIcon {
  background-image: var(--jp-icon-close);
}

.jp-CodeCheckIcon {
  background-image: var(--jp-icon-code-check);
}

.jp-CodeIcon {
  background-image: var(--jp-icon-code);
}

.jp-CollapseAllIcon {
  background-image: var(--jp-icon-collapse-all);
}

.jp-ConsoleIcon {
  background-image: var(--jp-icon-console);
}

.jp-CopyIcon {
  background-image: var(--jp-icon-copy);
}

.jp-CopyrightIcon {
  background-image: var(--jp-icon-copyright);
}

.jp-CutIcon {
  background-image: var(--jp-icon-cut);
}

.jp-DeleteIcon {
  background-image: var(--jp-icon-delete);
}

.jp-DownloadIcon {
  background-image: var(--jp-icon-download);
}

.jp-DuplicateIcon {
  background-image: var(--jp-icon-duplicate);
}

.jp-EditIcon {
  background-image: var(--jp-icon-edit);
}

.jp-EllipsesIcon {
  background-image: var(--jp-icon-ellipses);
}

.jp-ErrorIcon {
  background-image: var(--jp-icon-error);
}

.jp-ExpandAllIcon {
  background-image: var(--jp-icon-expand-all);
}

.jp-ExtensionIcon {
  background-image: var(--jp-icon-extension);
}

.jp-FastForwardIcon {
  background-image: var(--jp-icon-fast-forward);
}

.jp-FileIcon {
  background-image: var(--jp-icon-file);
}

.jp-FileUploadIcon {
  background-image: var(--jp-icon-file-upload);
}

.jp-FilterDotIcon {
  background-image: var(--jp-icon-filter-dot);
}

.jp-FilterIcon {
  background-image: var(--jp-icon-filter);
}

.jp-FilterListIcon {
  background-image: var(--jp-icon-filter-list);
}

.jp-FolderFavoriteIcon {
  background-image: var(--jp-icon-folder-favorite);
}

.jp-FolderIcon {
  background-image: var(--jp-icon-folder);
}

.jp-HomeIcon {
  background-image: var(--jp-icon-home);
}

.jp-Html5Icon {
  background-image: var(--jp-icon-html5);
}

.jp-ImageIcon {
  background-image: var(--jp-icon-image);
}

.jp-InfoIcon {
  background-image: var(--jp-icon-info);
}

.jp-InspectorIcon {
  background-image: var(--jp-icon-inspector);
}

.jp-JsonIcon {
  background-image: var(--jp-icon-json);
}

.jp-JuliaIcon {
  background-image: var(--jp-icon-julia);
}

.jp-JupyterFaviconIcon {
  background-image: var(--jp-icon-jupyter-favicon);
}

.jp-JupyterIcon {
  background-image: var(--jp-icon-jupyter);
}

.jp-JupyterlabWordmarkIcon {
  background-image: var(--jp-icon-jupyterlab-wordmark);
}

.jp-KernelIcon {
  background-image: var(--jp-icon-kernel);
}

.jp-KeyboardIcon {
  background-image: var(--jp-icon-keyboard);
}

.jp-LaunchIcon {
  background-image: var(--jp-icon-launch);
}

.jp-LauncherIcon {
  background-image: var(--jp-icon-launcher);
}

.jp-LineFormIcon {
  background-image: var(--jp-icon-line-form);
}

.jp-LinkIcon {
  background-image: var(--jp-icon-link);
}

.jp-ListIcon {
  background-image: var(--jp-icon-list);
}

.jp-MarkdownIcon {
  background-image: var(--jp-icon-markdown);
}

.jp-MoveDownIcon {
  background-image: var(--jp-icon-move-down);
}

.jp-MoveUpIcon {
  background-image: var(--jp-icon-move-up);
}

.jp-NewFolderIcon {
  background-image: var(--jp-icon-new-folder);
}

.jp-NotTrustedIcon {
  background-image: var(--jp-icon-not-trusted);
}

.jp-NotebookIcon {
  background-image: var(--jp-icon-notebook);
}

.jp-NumberingIcon {
  background-image: var(--jp-icon-numbering);
}

.jp-OfflineBoltIcon {
  background-image: var(--jp-icon-offline-bolt);
}

.jp-PaletteIcon {
  background-image: var(--jp-icon-palette);
}

.jp-PasteIcon {
  background-image: var(--jp-icon-paste);
}

.jp-PdfIcon {
  background-image: var(--jp-icon-pdf);
}

.jp-PythonIcon {
  background-image: var(--jp-icon-python);
}

.jp-RKernelIcon {
  background-image: var(--jp-icon-r-kernel);
}

.jp-ReactIcon {
  background-image: var(--jp-icon-react);
}

.jp-RedoIcon {
  background-image: var(--jp-icon-redo);
}

.jp-RefreshIcon {
  background-image: var(--jp-icon-refresh);
}

.jp-RegexIcon {
  background-image: var(--jp-icon-regex);
}

.jp-RunIcon {
  background-image: var(--jp-icon-run);
}

.jp-RunningIcon {
  background-image: var(--jp-icon-running);
}

.jp-SaveIcon {
  background-image: var(--jp-icon-save);
}

.jp-SearchIcon {
  background-image: var(--jp-icon-search);
}

.jp-SettingsIcon {
  background-image: var(--jp-icon-settings);
}

.jp-ShareIcon {
  background-image: var(--jp-icon-share);
}

.jp-SpreadsheetIcon {
  background-image: var(--jp-icon-spreadsheet);
}

.jp-StopIcon {
  background-image: var(--jp-icon-stop);
}

.jp-TabIcon {
  background-image: var(--jp-icon-tab);
}

.jp-TableRowsIcon {
  background-image: var(--jp-icon-table-rows);
}

.jp-TagIcon {
  background-image: var(--jp-icon-tag);
}

.jp-TerminalIcon {
  background-image: var(--jp-icon-terminal);
}

.jp-TextEditorIcon {
  background-image: var(--jp-icon-text-editor);
}

.jp-TocIcon {
  background-image: var(--jp-icon-toc);
}

.jp-TreeViewIcon {
  background-image: var(--jp-icon-tree-view);
}

.jp-TrustedIcon {
  background-image: var(--jp-icon-trusted);
}

.jp-UndoIcon {
  background-image: var(--jp-icon-undo);
}

.jp-UserIcon {
  background-image: var(--jp-icon-user);
}

.jp-UsersIcon {
  background-image: var(--jp-icon-users);
}

.jp-VegaIcon {
  background-image: var(--jp-icon-vega);
}

.jp-WordIcon {
  background-image: var(--jp-icon-word);
}

.jp-YamlIcon {
  background-image: var(--jp-icon-yaml);
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/**
 * (DEPRECATED) Support for consuming icons as CSS background images
 */

.jp-Icon,
.jp-MaterialIcon {
  background-position: center;
  background-repeat: no-repeat;
  background-size: 16px;
  min-width: 16px;
  min-height: 16px;
}

.jp-Icon-cover {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

/**
 * (DEPRECATED) Support for specific CSS icon sizes
 */

.jp-Icon-16 {
  background-size: 16px;
  min-width: 16px;
  min-height: 16px;
}

.jp-Icon-18 {
  background-size: 18px;
  min-width: 18px;
  min-height: 18px;
}

.jp-Icon-20 {
  background-size: 20px;
  min-width: 20px;
  min-height: 20px;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.lm-TabBar .lm-TabBar-addButton {
  align-items: center;
  display: flex;
  padding: 4px;
  padding-bottom: 5px;
  margin-right: 1px;
  background-color: var(--jp-layout-color2);
}

.lm-TabBar .lm-TabBar-addButton:hover {
  background-color: var(--jp-layout-color1);
}

.lm-DockPanel-tabBar .lm-TabBar-tab {
  width: var(--jp-private-horizontal-tab-width);
}

.lm-DockPanel-tabBar .lm-TabBar-content {
  flex: unset;
}

.lm-DockPanel-tabBar[data-orientation='horizontal'] {
  flex: 1 1 auto;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/**
 * Support for icons as inline SVG HTMLElements
 */

/* recolor the primary elements of an icon */
.jp-icon0[fill] {
  fill: var(--jp-inverse-layout-color0);
}

.jp-icon1[fill] {
  fill: var(--jp-inverse-layout-color1);
}

.jp-icon2[fill] {
  fill: var(--jp-inverse-layout-color2);
}

.jp-icon3[fill] {
  fill: var(--jp-inverse-layout-color3);
}

.jp-icon4[fill] {
  fill: var(--jp-inverse-layout-color4);
}

.jp-icon0[stroke] {
  stroke: var(--jp-inverse-layout-color0);
}

.jp-icon1[stroke] {
  stroke: var(--jp-inverse-layout-color1);
}

.jp-icon2[stroke] {
  stroke: var(--jp-inverse-layout-color2);
}

.jp-icon3[stroke] {
  stroke: var(--jp-inverse-layout-color3);
}

.jp-icon4[stroke] {
  stroke: var(--jp-inverse-layout-color4);
}

/* recolor the accent elements of an icon */
.jp-icon-accent0[fill] {
  fill: var(--jp-layout-color0);
}

.jp-icon-accent1[fill] {
  fill: var(--jp-layout-color1);
}

.jp-icon-accent2[fill] {
  fill: var(--jp-layout-color2);
}

.jp-icon-accent3[fill] {
  fill: var(--jp-layout-color3);
}

.jp-icon-accent4[fill] {
  fill: var(--jp-layout-color4);
}

.jp-icon-accent0[stroke] {
  stroke: var(--jp-layout-color0);
}

.jp-icon-accent1[stroke] {
  stroke: var(--jp-layout-color1);
}

.jp-icon-accent2[stroke] {
  stroke: var(--jp-layout-color2);
}

.jp-icon-accent3[stroke] {
  stroke: var(--jp-layout-color3);
}

.jp-icon-accent4[stroke] {
  stroke: var(--jp-layout-color4);
}

/* set the color of an icon to transparent */
.jp-icon-none[fill] {
  fill: none;
}

.jp-icon-none[stroke] {
  stroke: none;
}

/* brand icon colors. Same for light and dark */
.jp-icon-brand0[fill] {
  fill: var(--jp-brand-color0);
}

.jp-icon-brand1[fill] {
  fill: var(--jp-brand-color1);
}

.jp-icon-brand2[fill] {
  fill: var(--jp-brand-color2);
}

.jp-icon-brand3[fill] {
  fill: var(--jp-brand-color3);
}

.jp-icon-brand4[fill] {
  fill: var(--jp-brand-color4);
}

.jp-icon-brand0[stroke] {
  stroke: var(--jp-brand-color0);
}

.jp-icon-brand1[stroke] {
  stroke: var(--jp-brand-color1);
}

.jp-icon-brand2[stroke] {
  stroke: var(--jp-brand-color2);
}

.jp-icon-brand3[stroke] {
  stroke: var(--jp-brand-color3);
}

.jp-icon-brand4[stroke] {
  stroke: var(--jp-brand-color4);
}

/* warn icon colors. Same for light and dark */
.jp-icon-warn0[fill] {
  fill: var(--jp-warn-color0);
}

.jp-icon-warn1[fill] {
  fill: var(--jp-warn-color1);
}

.jp-icon-warn2[fill] {
  fill: var(--jp-warn-color2);
}

.jp-icon-warn3[fill] {
  fill: var(--jp-warn-color3);
}

.jp-icon-warn0[stroke] {
  stroke: var(--jp-warn-color0);
}

.jp-icon-warn1[stroke] {
  stroke: var(--jp-warn-color1);
}

.jp-icon-warn2[stroke] {
  stroke: var(--jp-warn-color2);
}

.jp-icon-warn3[stroke] {
  stroke: var(--jp-warn-color3);
}

/* icon colors that contrast well with each other and most backgrounds */
.jp-icon-contrast0[fill] {
  fill: var(--jp-icon-contrast-color0);
}

.jp-icon-contrast1[fill] {
  fill: var(--jp-icon-contrast-color1);
}

.jp-icon-contrast2[fill] {
  fill: var(--jp-icon-contrast-color2);
}

.jp-icon-contrast3[fill] {
  fill: var(--jp-icon-contrast-color3);
}

.jp-icon-contrast0[stroke] {
  stroke: var(--jp-icon-contrast-color0);
}

.jp-icon-contrast1[stroke] {
  stroke: var(--jp-icon-contrast-color1);
}

.jp-icon-contrast2[stroke] {
  stroke: var(--jp-icon-contrast-color2);
}

.jp-icon-contrast3[stroke] {
  stroke: var(--jp-icon-contrast-color3);
}

.jp-icon-dot[fill] {
  fill: var(--jp-warn-color0);
}

.jp-jupyter-icon-color[fill] {
  fill: var(--jp-jupyter-icon-color, var(--jp-warn-color0));
}

.jp-notebook-icon-color[fill] {
  fill: var(--jp-notebook-icon-color, var(--jp-warn-color0));
}

.jp-json-icon-color[fill] {
  fill: var(--jp-json-icon-color, var(--jp-warn-color1));
}

.jp-console-icon-color[fill] {
  fill: var(--jp-console-icon-color, white);
}

.jp-console-icon-background-color[fill] {
  fill: var(--jp-console-icon-background-color, var(--jp-brand-color1));
}

.jp-terminal-icon-color[fill] {
  fill: var(--jp-terminal-icon-color, var(--jp-layout-color2));
}

.jp-terminal-icon-background-color[fill] {
  fill: var(
    --jp-terminal-icon-background-color,
    var(--jp-inverse-layout-color2)
  );
}

.jp-text-editor-icon-color[fill] {
  fill: var(--jp-text-editor-icon-color, var(--jp-inverse-layout-color3));
}

.jp-inspector-icon-color[fill] {
  fill: var(--jp-inspector-icon-color, var(--jp-inverse-layout-color3));
}

/* CSS for icons in selected filebrowser listing items */
.jp-DirListing-item.jp-mod-selected .jp-icon-selectable[fill] {
  fill: #fff;
}

.jp-DirListing-item.jp-mod-selected .jp-icon-selectable-inverse[fill] {
  fill: var(--jp-brand-color1);
}

/* stylelint-disable selector-max-class, selector-max-compound-selectors */

/**
* TODO: come up with non css-hack solution for showing the busy icon on top
*  of the close icon
* CSS for complex behavior of close icon of tabs in the main area tabbar
*/
.lm-DockPanel-tabBar
  .lm-TabBar-tab.lm-mod-closable.jp-mod-dirty
  > .lm-TabBar-tabCloseIcon
  > :not(:hover)
  > .jp-icon3[fill] {
  fill: none;
}

.lm-DockPanel-tabBar
  .lm-TabBar-tab.lm-mod-closable.jp-mod-dirty
  > .lm-TabBar-tabCloseIcon
  > :not(:hover)
  > .jp-icon-busy[fill] {
  fill: var(--jp-inverse-layout-color3);
}

/* stylelint-enable selector-max-class, selector-max-compound-selectors */

/* CSS for icons in status bar */
#jp-main-statusbar .jp-mod-selected .jp-icon-selectable[fill] {
  fill: #fff;
}

#jp-main-statusbar .jp-mod-selected .jp-icon-selectable-inverse[fill] {
  fill: var(--jp-brand-color1);
}

/* special handling for splash icon CSS. While the theme CSS reloads during
   splash, the splash icon can loose theming. To prevent that, we set a
   default for its color variable */
:root {
  --jp-warn-color0: var(--md-orange-700);
}

/* not sure what to do with this one, used in filebrowser listing */
.jp-DragIcon {
  margin-right: 4px;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/**
 * Support for alt colors for icons as inline SVG HTMLElements
 */

/* alt recolor the primary elements of an icon */
.jp-icon-alt .jp-icon0[fill] {
  fill: var(--jp-layout-color0);
}

.jp-icon-alt .jp-icon1[fill] {
  fill: var(--jp-layout-color1);
}

.jp-icon-alt .jp-icon2[fill] {
  fill: var(--jp-layout-color2);
}

.jp-icon-alt .jp-icon3[fill] {
  fill: var(--jp-layout-color3);
}

.jp-icon-alt .jp-icon4[fill] {
  fill: var(--jp-layout-color4);
}

.jp-icon-alt .jp-icon0[stroke] {
  stroke: var(--jp-layout-color0);
}

.jp-icon-alt .jp-icon1[stroke] {
  stroke: var(--jp-layout-color1);
}

.jp-icon-alt .jp-icon2[stroke] {
  stroke: var(--jp-layout-color2);
}

.jp-icon-alt .jp-icon3[stroke] {
  stroke: var(--jp-layout-color3);
}

.jp-icon-alt .jp-icon4[stroke] {
  stroke: var(--jp-layout-color4);
}

/* alt recolor the accent elements of an icon */
.jp-icon-alt .jp-icon-accent0[fill] {
  fill: var(--jp-inverse-layout-color0);
}

.jp-icon-alt .jp-icon-accent1[fill] {
  fill: var(--jp-inverse-layout-color1);
}

.jp-icon-alt .jp-icon-accent2[fill] {
  fill: var(--jp-inverse-layout-color2);
}

.jp-icon-alt .jp-icon-accent3[fill] {
  fill: var(--jp-inverse-layout-color3);
}

.jp-icon-alt .jp-icon-accent4[fill] {
  fill: var(--jp-inverse-layout-color4);
}

.jp-icon-alt .jp-icon-accent0[stroke] {
  stroke: var(--jp-inverse-layout-color0);
}

.jp-icon-alt .jp-icon-accent1[stroke] {
  stroke: var(--jp-inverse-layout-color1);
}

.jp-icon-alt .jp-icon-accent2[stroke] {
  stroke: var(--jp-inverse-layout-color2);
}

.jp-icon-alt .jp-icon-accent3[stroke] {
  stroke: var(--jp-inverse-layout-color3);
}

.jp-icon-alt .jp-icon-accent4[stroke] {
  stroke: var(--jp-inverse-layout-color4);
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-icon-hoverShow:not(:hover) .jp-icon-hoverShow-content {
  display: none !important;
}

/**
 * Support for hover colors for icons as inline SVG HTMLElements
 */

/**
 * regular colors
 */

/* recolor the primary elements of an icon */
.jp-icon-hover :hover .jp-icon0-hover[fill] {
  fill: var(--jp-inverse-layout-color0);
}

.jp-icon-hover :hover .jp-icon1-hover[fill] {
  fill: var(--jp-inverse-layout-color1);
}

.jp-icon-hover :hover .jp-icon2-hover[fill] {
  fill: var(--jp-inverse-layout-color2);
}

.jp-icon-hover :hover .jp-icon3-hover[fill] {
  fill: var(--jp-inverse-layout-color3);
}

.jp-icon-hover :hover .jp-icon4-hover[fill] {
  fill: var(--jp-inverse-layout-color4);
}

.jp-icon-hover :hover .jp-icon0-hover[stroke] {
  stroke: var(--jp-inverse-layout-color0);
}

.jp-icon-hover :hover .jp-icon1-hover[stroke] {
  stroke: var(--jp-inverse-layout-color1);
}

.jp-icon-hover :hover .jp-icon2-hover[stroke] {
  stroke: var(--jp-inverse-layout-color2);
}

.jp-icon-hover :hover .jp-icon3-hover[stroke] {
  stroke: var(--jp-inverse-layout-color3);
}

.jp-icon-hover :hover .jp-icon4-hover[stroke] {
  stroke: var(--jp-inverse-layout-color4);
}

/* recolor the accent elements of an icon */
.jp-icon-hover :hover .jp-icon-accent0-hover[fill] {
  fill: var(--jp-layout-color0);
}

.jp-icon-hover :hover .jp-icon-accent1-hover[fill] {
  fill: var(--jp-layout-color1);
}

.jp-icon-hover :hover .jp-icon-accent2-hover[fill] {
  fill: var(--jp-layout-color2);
}

.jp-icon-hover :hover .jp-icon-accent3-hover[fill] {
  fill: var(--jp-layout-color3);
}

.jp-icon-hover :hover .jp-icon-accent4-hover[fill] {
  fill: var(--jp-layout-color4);
}

.jp-icon-hover :hover .jp-icon-accent0-hover[stroke] {
  stroke: var(--jp-layout-color0);
}

.jp-icon-hover :hover .jp-icon-accent1-hover[stroke] {
  stroke: var(--jp-layout-color1);
}

.jp-icon-hover :hover .jp-icon-accent2-hover[stroke] {
  stroke: var(--jp-layout-color2);
}

.jp-icon-hover :hover .jp-icon-accent3-hover[stroke] {
  stroke: var(--jp-layout-color3);
}

.jp-icon-hover :hover .jp-icon-accent4-hover[stroke] {
  stroke: var(--jp-layout-color4);
}

/* set the color of an icon to transparent */
.jp-icon-hover :hover .jp-icon-none-hover[fill] {
  fill: none;
}

.jp-icon-hover :hover .jp-icon-none-hover[stroke] {
  stroke: none;
}

/**
 * inverse colors
 */

/* inverse recolor the primary elements of an icon */
.jp-icon-hover.jp-icon-alt :hover .jp-icon0-hover[fill] {
  fill: var(--jp-layout-color0);
}

.jp-icon-hover.jp-icon-alt :hover .jp-icon1-hover[fill] {
  fill: var(--jp-layout-color1);
}

.jp-icon-hover.jp-icon-alt :hover .jp-icon2-hover[fill] {
  fill: var(--jp-layout-color2);
}

.jp-icon-hover.jp-icon-alt :hover .jp-icon3-hover[fill] {
  fill: var(--jp-layout-color3);
}

.jp-icon-hover.jp-icon-alt :hover .jp-icon4-hover[fill] {
  fill: var(--jp-layout-color4);
}

.jp-icon-hover.jp-icon-alt :hover .jp-icon0-hover[stroke] {
  stroke: var(--jp-layout-color0);
}

.jp-icon-hover.jp-icon-alt :hover .jp-icon1-hover[stroke] {
  stroke: var(--jp-layout-color1);
}

.jp-icon-hover.jp-icon-alt :hover .jp-icon2-hover[stroke] {
  stroke: var(--jp-layout-color2);
}

.jp-icon-hover.jp-icon-alt :hover .jp-icon3-hover[stroke] {
  stroke: var(--jp-layout-color3);
}

.jp-icon-hover.jp-icon-alt :hover .jp-icon4-hover[stroke] {
  stroke: var(--jp-layout-color4);
}

/* inverse recolor the accent elements of an icon */
.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent0-hover[fill] {
  fill: var(--jp-inverse-layout-color0);
}

.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent1-hover[fill] {
  fill: var(--jp-inverse-layout-color1);
}

.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent2-hover[fill] {
  fill: var(--jp-inverse-layout-color2);
}

.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent3-hover[fill] {
  fill: var(--jp-inverse-layout-color3);
}

.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent4-hover[fill] {
  fill: var(--jp-inverse-layout-color4);
}

.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent0-hover[stroke] {
  stroke: var(--jp-inverse-layout-color0);
}

.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent1-hover[stroke] {
  stroke: var(--jp-inverse-layout-color1);
}

.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent2-hover[stroke] {
  stroke: var(--jp-inverse-layout-color2);
}

.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent3-hover[stroke] {
  stroke: var(--jp-inverse-layout-color3);
}

.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent4-hover[stroke] {
  stroke: var(--jp-inverse-layout-color4);
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-IFrame {
  width: 100%;
  height: 100%;
}

.jp-IFrame > iframe {
  border: none;
}

/*
When drag events occur, `lm-mod-override-cursor` is added to the body.
Because iframes steal all cursor events, the following two rules are necessary
to suppress pointer events while resize drags are occurring. There may be a
better solution to this problem.
*/
body.lm-mod-override-cursor .jp-IFrame {
  position: relative;
}

body.lm-mod-override-cursor .jp-IFrame::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
}

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2016, Jupyter Development Team.
|
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-HoverBox {
  position: fixed;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-FormGroup-content fieldset {
  border: none;
  padding: 0;
  min-width: 0;
  width: 100%;
}

/* stylelint-disable selector-max-type */

.jp-FormGroup-content fieldset .jp-inputFieldWrapper input,
.jp-FormGroup-content fieldset .jp-inputFieldWrapper select,
.jp-FormGroup-content fieldset .jp-inputFieldWrapper textarea {
  font-size: var(--jp-content-font-size2);
  border-color: var(--jp-input-border-color);
  border-style: solid;
  border-radius: var(--jp-border-radius);
  border-width: 1px;
  padding: 6px 8px;
  background: none;
  color: var(--jp-ui-font-color0);
  height: inherit;
}

.jp-FormGroup-content fieldset input[type='checkbox'] {
  position: relative;
  top: 2px;
  margin-left: 0;
}

.jp-FormGroup-content button.jp-mod-styled {
  cursor: pointer;
}

.jp-FormGroup-content .checkbox label {
  cursor: pointer;
  font-size: var(--jp-content-font-size1);
}

.jp-FormGroup-content .jp-root > fieldset > legend {
  display: none;
}

.jp-FormGroup-content .jp-root > fieldset > p {
  display: none;
}

/** copy of `input.jp-mod-styled:focus` style */
.jp-FormGroup-content fieldset input:focus,
.jp-FormGroup-content fieldset select:focus {
  -moz-outline-radius: unset;
  outline: var(--jp-border-width) solid var(--md-blue-500);
  outline-offset: -1px;
  box-shadow: inset 0 0 4px var(--md-blue-300);
}

.jp-FormGroup-content fieldset input:hover:not(:focus),
.jp-FormGroup-content fieldset select:hover:not(:focus) {
  background-color: var(--jp-border-color2);
}

/* stylelint-enable selector-max-type */

.jp-FormGroup-content .checkbox .field-description {
  /* Disable default description field for checkbox:
   because other widgets do not have description fields,
   we add descriptions to each widget on the field level.
  */
  display: none;
}

.jp-FormGroup-content #root__description {
  display: none;
}

.jp-FormGroup-content .jp-modifiedIndicator {
  width: 5px;
  background-color: var(--jp-brand-color2);
  margin-top: 0;
  margin-left: calc(var(--jp-private-settingeditor-modifier-indent) * -1);
  flex-shrink: 0;
}

.jp-FormGroup-content .jp-modifiedIndicator.jp-errorIndicator {
  background-color: var(--jp-error-color0);
  margin-right: 0.5em;
}

/* RJSF ARRAY style */

.jp-arrayFieldWrapper legend {
  font-size: var(--jp-content-font-size2);
  color: var(--jp-ui-font-color0);
  flex-basis: 100%;
  padding: 4px 0;
  font-weight: var(--jp-content-heading-font-weight);
  border-bottom: 1px solid var(--jp-border-color2);
}

.jp-arrayFieldWrapper .field-description {
  padding: 4px 0;
  white-space: pre-wrap;
}

.jp-arrayFieldWrapper .array-item {
  width: 100%;
  border: 1px solid var(--jp-border-color2);
  border-radius: 4px;
  margin: 4px;
}

.jp-ArrayOperations {
  display: flex;
  margin-left: 8px;
}

.jp-ArrayOperationsButton {
  margin: 2px;
}

.jp-ArrayOperationsButton .jp-icon3[fill] {
  fill: var(--jp-ui-font-color0);
}

button.jp-ArrayOperationsButton.jp-mod-styled:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

/* RJSF form validation error */

.jp-FormGroup-content .validationErrors {
  color: var(--jp-error-color0);
}

/* Hide panel level error as duplicated the field level error */
.jp-FormGroup-content .panel.errors {
  display: none;
}

/* RJSF normal content (settings-editor) */

.jp-FormGroup-contentNormal {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.jp-FormGroup-contentNormal .jp-FormGroup-contentItem {
  margin-left: 7px;
  color: var(--jp-ui-font-color0);
}

.jp-FormGroup-contentNormal .jp-FormGroup-description {
  flex-basis: 100%;
  padding: 4px 7px;
}

.jp-FormGroup-contentNormal .jp-FormGroup-default {
  flex-basis: 100%;
  padding: 4px 7px;
}

.jp-FormGroup-contentNormal .jp-FormGroup-fieldLabel {
  font-size: var(--jp-content-font-size1);
  font-weight: normal;
  min-width: 120px;
}

.jp-FormGroup-contentNormal fieldset:not(:first-child) {
  margin-left: 7px;
}

.jp-FormGroup-contentNormal .field-array-of-string .array-item {
  /* Display `jp-ArrayOperations` buttons side-by-side with content except
    for small screens where flex-wrap will place them one below the other.
  */
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.jp-FormGroup-contentNormal .jp-objectFieldWrapper .form-group {
  padding: 2px 8px 2px var(--jp-private-settingeditor-modifier-indent);
  margin-top: 2px;
}

/* RJSF compact content (metadata-form) */

.jp-FormGroup-content.jp-FormGroup-contentCompact {
  width: 100%;
}

.jp-FormGroup-contentCompact .form-group {
  display: flex;
  padding: 0.5em 0.2em 0.5em 0;
}

.jp-FormGroup-contentCompact
  .jp-FormGroup-compactTitle
  .jp-FormGroup-description {
  font-size: var(--jp-ui-font-size1);
  color: var(--jp-ui-font-color2);
}

.jp-FormGroup-contentCompact .jp-FormGroup-fieldLabel {
  padding-bottom: 0.3em;
}

.jp-FormGroup-contentCompact .jp-inputFieldWrapper .form-control {
  width: 100%;
  box-sizing: border-box;
}

.jp-FormGroup-contentCompact .jp-arrayFieldWrapper .jp-FormGroup-compactTitle {
  padding-bottom: 7px;
}

.jp-FormGroup-contentCompact
  .jp-objectFieldWrapper
  .jp-objectFieldWrapper
  .form-group {
  padding: 2px 8px 2px var(--jp-private-settingeditor-modifier-indent);
  margin-top: 2px;
}

.jp-FormGroup-contentCompact ul.error-detail {
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
  padding-inline-start: 1em;
}

/*
 * Copyright (c) Jupyter Development Team.
 * Distributed under the terms of the Modified BSD License.
 */

.jp-SidePanel {
  display: flex;
  flex-direction: column;
  min-width: var(--jp-sidebar-min-width);
  overflow-y: auto;
  color: var(--jp-ui-font-color1);
  background: var(--jp-layout-color1);
  font-size: var(--jp-ui-font-size1);
}

.jp-SidePanel-header {
  flex: 0 0 auto;
  display: flex;
  border-bottom: var(--jp-border-width) solid var(--jp-border-color2);
  font-size: var(--jp-ui-font-size0);
  font-weight: 600;
  letter-spacing: 1px;
  margin: 0;
  padding: 2px;
  text-transform: uppercase;
}

.jp-SidePanel-toolbar {
  flex: 0 0 auto;
}

.jp-SidePanel-content {
  flex: 1 1 auto;
}

.jp-SidePanel-toolbar,
.jp-AccordionPanel-toolbar {
  height: var(--jp-private-toolbar-height);
}

.jp-SidePanel-toolbar.jp-Toolbar-micro {
  display: none;
}

.lm-AccordionPanel .jp-AccordionPanel-title {
  box-sizing: border-box;
  line-height: 25px;
  margin: 0;
  display: flex;
  align-items: center;
  background: var(--jp-layout-color1);
  color: var(--jp-ui-font-color1);
  border-bottom: var(--jp-border-width) solid var(--jp-toolbar-border-color);
  box-shadow: var(--jp-toolbar-box-shadow);
  font-size: var(--jp-ui-font-size0);
}

.jp-AccordionPanel-title {
  cursor: pointer;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  text-transform: uppercase;
}

.lm-AccordionPanel[data-orientation='horizontal'] > .jp-AccordionPanel-title {
  /* Title is rotated for horizontal accordion panel using CSS */
  display: block;
  transform-origin: top left;
  transform: rotate(-90deg) translate(-100%);
}

.jp-AccordionPanel-title .lm-AccordionPanel-titleLabel {
  user-select: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.jp-AccordionPanel-title .lm-AccordionPanel-titleCollapser {
  transform: rotate(-90deg);
  margin: auto 0;
  height: 16px;
}

.jp-AccordionPanel-title.lm-mod-expanded .lm-AccordionPanel-titleCollapser {
  transform: rotate(0deg);
}

.lm-AccordionPanel .jp-AccordionPanel-toolbar {
  background: none;
  box-shadow: none;
  border: none;
  margin-left: auto;
}

.lm-AccordionPanel .lm-SplitPanel-handle:hover {
  background: var(--jp-layout-color3);
}

.jp-text-truncated {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/*-----------------------------------------------------------------------------
| Copyright (c) 2017, Jupyter Development Team.
|
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-Spinner {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: var(--jp-layout-color0);
  outline: none;
}

.jp-SpinnerContent {
  font-size: 10px;
  margin: 50px auto;
  text-indent: -9999em;
  width: 3em;
  height: 3em;
  border-radius: 50%;
  background: var(--jp-brand-color3);
  background: linear-gradient(
    to right,
    #f37626 10%,
    rgba(255, 255, 255, 0) 42%
  );
  position: relative;
  animation: load3 1s infinite linear, fadeIn 1s;
}

.jp-SpinnerContent::before {
  width: 50%;
  height: 50%;
  background: #f37626;
  border-radius: 100% 0 0;
  position: absolute;
  top: 0;
  left: 0;
  content: '';
}

.jp-SpinnerContent::after {
  background: var(--jp-layout-color0);
  width: 75%;
  height: 75%;
  border-radius: 50%;
  content: '';
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes load3 {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2017, Jupyter Development Team.
|
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

button.jp-mod-styled {
  font-size: var(--jp-ui-font-size1);
  color: var(--jp-ui-font-color0);
  border: none;
  box-sizing: border-box;
  text-align: center;
  line-height: 32px;
  height: 32px;
  padding: 0 12px;
  letter-spacing: 0.8px;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

input.jp-mod-styled {
  background: var(--jp-input-background);
  height: 28px;
  box-sizing: border-box;
  border: var(--jp-border-width) solid var(--jp-border-color1);
  padding-left: 7px;
  padding-right: 7px;
  font-size: var(--jp-ui-font-size2);
  color: var(--jp-ui-font-color0);
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

input[type='checkbox'].jp-mod-styled {
  appearance: checkbox;
  -webkit-appearance: checkbox;
  -moz-appearance: checkbox;
  height: auto;
}

input.jp-mod-styled:focus {
  border: var(--jp-border-width) solid var(--md-blue-500);
  box-shadow: inset 0 0 4px var(--md-blue-300);
}

.jp-select-wrapper {
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 1px;
  background-color: var(--jp-layout-color1);
  box-sizing: border-box;
  margin-bottom: 12px;
}

.jp-select-wrapper:not(.multiple) {
  height: 28px;
}

.jp-select-wrapper.jp-mod-focused select.jp-mod-styled {
  border: var(--jp-border-width) solid var(--jp-input-active-border-color);
  box-shadow: var(--jp-input-box-shadow);
  background-color: var(--jp-input-active-background);
}

select.jp-mod-styled:hover {
  cursor: pointer;
  color: var(--jp-ui-font-color0);
  background-color: var(--jp-input-hover-background);
  box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.5);
}

select.jp-mod-styled {
  flex: 1 1 auto;
  width: 100%;
  font-size: var(--jp-ui-font-size2);
  background: var(--jp-input-background);
  color: var(--jp-ui-font-color0);
  padding: 0 25px 0 8px;
  border: var(--jp-border-width) solid var(--jp-input-border-color);
  border-radius: 0;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

select.jp-mod-styled:not([multiple]) {
  height: 32px;
}

select.jp-mod-styled[multiple] {
  max-height: 200px;
  overflow-y: auto;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-switch {
  display: flex;
  align-items: center;
  padding-left: 4px;
  padding-right: 4px;
  font-size: var(--jp-ui-font-size1);
  background-color: transparent;
  color: var(--jp-ui-font-color1);
  border: none;
  height: 20px;
}

.jp-switch:hover {
  background-color: var(--jp-layout-color2);
}

.jp-switch-label {
  margin-right: 5px;
  font-family: var(--jp-ui-font-family);
}

.jp-switch-track {
  cursor: pointer;
  background-color: var(--jp-switch-color, var(--jp-border-color1));
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;
  height: 16px;
  width: 35px;
  position: relative;
}

.jp-switch-track::before {
  content: '';
  position: absolute;
  height: 10px;
  width: 10px;
  margin: 3px;
  left: 0;
  background-color: var(--jp-ui-inverse-font-color1);
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 50%;
}

.jp-switch[aria-checked='true'] .jp-switch-track {
  background-color: var(--jp-switch-true-position-color, var(--jp-warn-color0));
}

.jp-switch[aria-checked='true'] .jp-switch-track::before {
  /* track width (35) - margins (3 + 3) - thumb width (10) */
  left: 19px;
}

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2016, Jupyter Development Team.
|
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

:root {
  --jp-private-toolbar-height: calc(
    28px + var(--jp-border-width)
  ); /* leave 28px for content */
}

.jp-Toolbar {
  color: var(--jp-ui-font-color1);
  flex: 0 0 auto;
  display: flex;
  flex-direction: row;
  border-bottom: var(--jp-border-width) solid var(--jp-toolbar-border-color);
  box-shadow: var(--jp-toolbar-box-shadow);
  background: var(--jp-toolbar-background);
  min-height: var(--jp-toolbar-micro-height);
  padding: 2px;
  z-index: 8;
  overflow-x: hidden;
}

/* Toolbar items */

.jp-Toolbar > .jp-Toolbar-item.jp-Toolbar-spacer {
  flex-grow: 1;
  flex-shrink: 1;
}

.jp-Toolbar-item.jp-Toolbar-kernelStatus {
  display: inline-block;
  width: 32px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 16px;
}

.jp-Toolbar > .jp-Toolbar-item {
  flex: 0 0 auto;
  display: flex;
  padding-left: 1px;
  padding-right: 1px;
  font-size: var(--jp-ui-font-size1);
  line-height: var(--jp-private-toolbar-height);
  height: 100%;
}

/* Toolbar buttons */

/* This is the div we use to wrap the react component into a Widget */
div.jp-ToolbarButton {
  color: transparent;
  border: none;
  box-sizing: border-box;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding: 0;
  margin: 0;
}

button.jp-ToolbarButtonComponent {
  background: var(--jp-layout-color1);
  border: none;
  box-sizing: border-box;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding: 0 6px;
  margin: 0;
  height: 24px;
  border-radius: var(--jp-border-radius);
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 14px;
  min-width: unset;
  min-height: unset;
}

button.jp-ToolbarButtonComponent:disabled {
  opacity: 0.4;
}

button.jp-ToolbarButtonComponent > span {
  padding: 0;
  flex: 0 0 auto;
}

button.jp-ToolbarButtonComponent .jp-ToolbarButtonComponent-label {
  font-size: var(--jp-ui-font-size1);
  line-height: 100%;
  padding-left: 2px;
  color: var(--jp-ui-font-color1);
  font-family: var(--jp-ui-font-family);
}

#jp-main-dock-panel[data-mode='single-document']
  .jp-MainAreaWidget
  > .jp-Toolbar.jp-Toolbar-micro {
  padding: 0;
  min-height: 0;
}

#jp-main-dock-panel[data-mode='single-document']
  .jp-MainAreaWidget
  > .jp-Toolbar {
  border: none;
  box-shadow: none;
}

/*
 * Copyright (c) Jupyter Development Team.
 * Distributed under the terms of the Modified BSD License.
 */

.jp-WindowedPanel-outer {
  position: relative;
  overflow-y: auto;
}

.jp-WindowedPanel-inner {
  position: relative;
}

.jp-WindowedPanel-window {
  position: absolute;
  left: 0;
  right: 0;
  overflow: visible;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/* Sibling imports */

body {
  color: var(--jp-ui-font-color1);
  font-size: var(--jp-ui-font-size1);
}

/* Disable native link decoration styles everywhere outside of dialog boxes */
a {
  text-decoration: unset;
  color: unset;
}

a:hover {
  text-decoration: unset;
  color: unset;
}

/* Accessibility for links inside dialog box text */
.jp-Dialog-content a {
  text-decoration: revert;
  color: var(--jp-content-link-color);
}

.jp-Dialog-content a:hover {
  text-decoration: revert;
}

/* Styles for ui-components */
.jp-Button {
  color: var(--jp-ui-font-color2);
  border-radius: var(--jp-border-radius);
  padding: 0 12px;
  font-size: var(--jp-ui-font-size1);

  /* Copy from blueprint 3 */
  display: inline-flex;
  flex-direction: row;
  border: none;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  text-align: left;
  vertical-align: middle;
  min-height: 30px;
  min-width: 30px;
}

.jp-Button:disabled {
  cursor: not-allowed;
}

.jp-Button:empty {
  padding: 0 !important;
}

.jp-Button.jp-mod-small {
  min-height: 24px;
  min-width: 24px;
  font-size: 12px;
  padding: 0 7px;
}

/* Use our own theme for hover styles */
.jp-Button.jp-mod-minimal:hover {
  background-color: var(--jp-layout-color2);
}

.jp-Button.jp-mod-minimal {
  background: none;
}

.jp-InputGroup {
  display: block;
  position: relative;
}

.jp-InputGroup input {
  box-sizing: border-box;
  border: none;
  border-radius: 0;
  background-color: transparent;
  color: var(--jp-ui-font-color0);
  box-shadow: inset 0 0 0 var(--jp-border-width) var(--jp-input-border-color);
  padding-bottom: 0;
  padding-top: 0;
  padding-left: 10px;
  padding-right: 28px;
  position: relative;
  width: 100%;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-size: 14px;
  font-weight: 400;
  height: 30px;
  line-height: 30px;
  outline: none;
  vertical-align: middle;
}

.jp-InputGroup input:focus {
  box-shadow: inset 0 0 0 var(--jp-border-width)
      var(--jp-input-active-box-shadow-color),
    inset 0 0 0 3px var(--jp-input-active-box-shadow-color);
}

.jp-InputGroup input:disabled {
  cursor: not-allowed;
  resize: block;
  background-color: var(--jp-layout-color2);
  color: var(--jp-ui-font-color2);
}

.jp-InputGroup input:disabled ~ span {
  cursor: not-allowed;
  color: var(--jp-ui-font-color2);
}

.jp-InputGroup input::placeholder,
input::placeholder {
  color: var(--jp-ui-font-color2);
}

.jp-InputGroupAction {
  position: absolute;
  bottom: 1px;
  right: 0;
  padding: 6px;
}

.jp-HTMLSelect.jp-DefaultStyle select {
  background-color: initial;
  border: none;
  border-radius: 0;
  box-shadow: none;
  color: var(--jp-ui-font-color0);
  display: block;
  font-size: var(--jp-ui-font-size1);
  font-family: var(--jp-ui-font-family);
  height: 24px;
  line-height: 14px;
  padding: 0 25px 0 10px;
  text-align: left;
  -moz-appearance: none;
  -webkit-appearance: none;
}

.jp-HTMLSelect.jp-DefaultStyle select:disabled {
  background-color: var(--jp-layout-color2);
  color: var(--jp-ui-font-color2);
  cursor: not-allowed;
  resize: block;
}

.jp-HTMLSelect.jp-DefaultStyle select:disabled ~ span {
  cursor: not-allowed;
}

/* Use our own theme for hover and option styles */
/* stylelint-disable-next-line selector-max-type */
.jp-HTMLSelect.jp-DefaultStyle select:hover,
.jp-HTMLSelect.jp-DefaultStyle select > option {
  background-color: var(--jp-layout-color2);
  color: var(--jp-ui-font-color0);
}

select {
  box-sizing: border-box;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Styles
|----------------------------------------------------------------------------*/

.jp-StatusBar-Widget {
  display: flex;
  align-items: center;
  background: var(--jp-layout-color2);
  min-height: var(--jp-statusbar-height);
  justify-content: space-between;
  padding: 0 10px;
}

.jp-StatusBar-Left {
  display: flex;
  align-items: center;
  flex-direction: row;
}

.jp-StatusBar-Middle {
  display: flex;
  align-items: center;
}

.jp-StatusBar-Right {
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
}

.jp-StatusBar-Item {
  max-height: var(--jp-statusbar-height);
  margin: 0 2px;
  height: var(--jp-statusbar-height);
  white-space: nowrap;
  text-overflow: ellipsis;
  color: var(--jp-ui-font-color1);
  padding: 0 6px;
}

.jp-mod-highlighted:hover {
  background-color: var(--jp-layout-color3);
}

.jp-mod-clicked {
  background-color: var(--jp-brand-color1);
}

.jp-mod-clicked:hover {
  background-color: var(--jp-brand-color0);
}

.jp-mod-clicked .jp-StatusBar-TextItem {
  color: var(--jp-ui-inverse-font-color1);
}

.jp-StatusBar-HoverItem {
  box-shadow: '0px 4px 4px rgba(0, 0, 0, 0.25)';
}

.jp-StatusBar-TextItem {
  font-size: var(--jp-ui-font-size1);
  font-family: var(--jp-ui-font-family);
  line-height: 24px;
  color: var(--jp-ui-font-color1);
}

.jp-StatusBar-GroupItem {
  display: flex;
  align-items: center;
  flex-direction: row;
}

.jp-Statusbar-ProgressCircle svg {
  display: block;
  margin: 0 auto;
  width: 16px;
  height: 24px;
  align-self: normal;
}

.jp-Statusbar-ProgressCircle path {
  fill: var(--jp-inverse-layout-color3);
}

.jp-Statusbar-ProgressBar-progress-bar {
  height: 10px;
  width: 100px;
  border: solid 0.25px var(--jp-brand-color2);
  border-radius: 3px;
  overflow: hidden;
  align-self: center;
}

.jp-Statusbar-ProgressBar-progress-bar > div {
  background-color: var(--jp-brand-color2);
  background-image: linear-gradient(
    -45deg,
    rgba(255, 255, 255, 0.2) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.2) 75%,
    transparent 75%,
    transparent
  );
  background-size: 40px 40px;
  float: left;
  width: 0%;
  height: 100%;
  font-size: 12px;
  line-height: 14px;
  color: #fff;
  text-align: center;
  animation: jp-Statusbar-ExecutionTime-progress-bar 2s linear infinite;
}

.jp-Statusbar-ProgressBar-progress-bar p {
  color: var(--jp-ui-font-color1);
  font-family: var(--jp-ui-font-family);
  font-size: var(--jp-ui-font-size1);
  line-height: 10px;
  width: 100px;
}

@keyframes jp-Statusbar-ExecutionTime-progress-bar {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: 40px 40px;
  }
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Variables
|----------------------------------------------------------------------------*/

:root {
  --jp-private-commandpalette-search-height: 28px;
}

/*-----------------------------------------------------------------------------
| Overall styles
|----------------------------------------------------------------------------*/

.lm-CommandPalette {
  padding-bottom: 0;
  color: var(--jp-ui-font-color1);
  background: var(--jp-layout-color1);

  /* This is needed so that all font sizing of children done in ems is
   * relative to this base size */
  font-size: var(--jp-ui-font-size1);
}

/*-----------------------------------------------------------------------------
| Modal variant
|----------------------------------------------------------------------------*/

.jp-ModalCommandPalette {
  position: absolute;
  z-index: 10000;
  top: 38px;
  left: 30%;
  margin: 0;
  padding: 4px;
  width: 40%;
  box-shadow: var(--jp-elevation-z4);
  border-radius: 4px;
  background: var(--jp-layout-color0);
}

.jp-ModalCommandPalette .lm-CommandPalette {
  max-height: 40vh;
}

.jp-ModalCommandPalette .lm-CommandPalette .lm-close-icon::after {
  display: none;
}

.jp-ModalCommandPalette .lm-CommandPalette .lm-CommandPalette-header {
  display: none;
}

.jp-ModalCommandPalette .lm-CommandPalette .lm-CommandPalette-item {
  margin-left: 4px;
  margin-right: 4px;
}

.jp-ModalCommandPalette
  .lm-CommandPalette
  .lm-CommandPalette-item.lm-mod-disabled {
  display: none;
}

/*-----------------------------------------------------------------------------
| Search
|----------------------------------------------------------------------------*/

.lm-CommandPalette-search {
  padding: 4px;
  background-color: var(--jp-layout-color1);
  z-index: 2;
}

.lm-CommandPalette-wrapper {
  overflow: overlay;
  padding: 0 9px;
  background-color: var(--jp-input-active-background);
  height: 30px;
  box-shadow: inset 0 0 0 var(--jp-border-width) var(--jp-input-border-color);
}

.lm-CommandPalette.lm-mod-focused .lm-CommandPalette-wrapper {
  box-shadow: inset 0 0 0 1px var(--jp-input-active-box-shadow-color),
    inset 0 0 0 3px var(--jp-input-active-box-shadow-color);
}

.jp-SearchIconGroup {
  color: white;
  background-color: var(--jp-brand-color1);
  position: absolute;
  top: 4px;
  right: 4px;
  padding: 5px 5px 1px;
}

.jp-SearchIconGroup svg {
  height: 20px;
  width: 20px;
}

.jp-SearchIconGroup .jp-icon3[fill] {
  fill: var(--jp-layout-color0);
}

.lm-CommandPalette-input {
  background: transparent;
  width: calc(100% - 18px);
  float: left;
  border: none;
  outline: none;
  font-size: var(--jp-ui-font-size1);
  color: var(--jp-ui-font-color0);
  line-height: var(--jp-private-commandpalette-search-height);
}

.lm-CommandPalette-input::-webkit-input-placeholder,
.lm-CommandPalette-input::-moz-placeholder,
.lm-CommandPalette-input:-ms-input-placeholder {
  color: var(--jp-ui-font-color2);
  font-size: var(--jp-ui-font-size1);
}

/*-----------------------------------------------------------------------------
| Results
|----------------------------------------------------------------------------*/

.lm-CommandPalette-header:first-child {
  margin-top: 0;
}

.lm-CommandPalette-header {
  border-bottom: solid var(--jp-border-width) var(--jp-border-color2);
  color: var(--jp-ui-font-color1);
  cursor: pointer;
  display: flex;
  font-size: var(--jp-ui-font-size0);
  font-weight: 600;
  letter-spacing: 1px;
  margin-top: 8px;
  padding: 8px 0 8px 12px;
  text-transform: uppercase;
}

.lm-CommandPalette-header.lm-mod-active {
  background: var(--jp-layout-color2);
}

.lm-CommandPalette-header > mark {
  background-color: transparent;
  font-weight: bold;
  color: var(--jp-ui-font-color1);
}

.lm-CommandPalette-item {
  padding: 4px 12px 4px 4px;
  color: var(--jp-ui-font-color1);
  font-size: var(--jp-ui-font-size1);
  font-weight: 400;
  display: flex;
}

.lm-CommandPalette-item.lm-mod-disabled {
  color: var(--jp-ui-font-color2);
}

.lm-CommandPalette-item.lm-mod-active {
  color: var(--jp-ui-inverse-font-color1);
  background: var(--jp-brand-color1);
}

.lm-CommandPalette-item.lm-mod-active .lm-CommandPalette-itemLabel > mark {
  color: var(--jp-ui-inverse-font-color0);
}

.lm-CommandPalette-item.lm-mod-active .jp-icon-selectable[fill] {
  fill: var(--jp-layout-color0);
}

.lm-CommandPalette-item.lm-mod-active:hover:not(.lm-mod-disabled) {
  color: var(--jp-ui-inverse-font-color1);
  background: var(--jp-brand-color1);
}

.lm-CommandPalette-item:hover:not(.lm-mod-active):not(.lm-mod-disabled) {
  background: var(--jp-layout-color2);
}

.lm-CommandPalette-itemContent {
  overflow: hidden;
}

.lm-CommandPalette-itemLabel > mark {
  color: var(--jp-ui-font-color0);
  background-color: transparent;
  font-weight: bold;
}

.lm-CommandPalette-item.lm-mod-disabled mark {
  color: var(--jp-ui-font-color2);
}

.lm-CommandPalette-item .lm-CommandPalette-itemIcon {
  margin: 0 4px 0 0;
  position: relative;
  width: 16px;
  top: 2px;
  flex: 0 0 auto;
}

.lm-CommandPalette-item.lm-mod-disabled .lm-CommandPalette-itemIcon {
  opacity: 0.6;
}

.lm-CommandPalette-item .lm-CommandPalette-itemShortcut {
  flex: 0 0 auto;
}

.lm-CommandPalette-itemCaption {
  display: none;
}

.lm-CommandPalette-content {
  background-color: var(--jp-layout-color1);
}

.lm-CommandPalette-content:empty::after {
  content: 'No results';
  margin: auto;
  margin-top: 20px;
  width: 100px;
  display: block;
  font-size: var(--jp-ui-font-size2);
  font-family: var(--jp-ui-font-family);
  font-weight: lighter;
}

.lm-CommandPalette-emptyMessage {
  text-align: center;
  margin-top: 24px;
  line-height: 1.32;
  padding: 0 8px;
  color: var(--jp-content-font-color3);
}

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2017, Jupyter Development Team.
|
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-Dialog {
  position: absolute;
  z-index: 10000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background: var(--jp-dialog-background);
}

.jp-Dialog-content {
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  background: var(--jp-layout-color1);
  padding: 24px 24px 12px;
  min-width: 300px;
  min-height: 150px;
  max-width: 1000px;
  max-height: 500px;
  box-sizing: border-box;
  box-shadow: var(--jp-elevation-z20);
  word-wrap: break-word;
  border-radius: var(--jp-border-radius);

  /* This is needed so that all font sizing of children done in ems is
   * relative to this base size */
  font-size: var(--jp-ui-font-size1);
  color: var(--jp-ui-font-color1);
  resize: both;
}

.jp-Dialog-content.jp-Dialog-content-small {
  max-width: 500px;
}

.jp-Dialog-button {
  overflow: visible;
}

button.jp-Dialog-button:focus {
  outline: 1px solid var(--jp-brand-color1);
  outline-offset: 4px;
  -moz-outline-radius: 0;
}

button.jp-Dialog-button:focus::-moz-focus-inner {
  border: 0;
}

button.jp-Dialog-button.jp-mod-styled.jp-mod-accept:focus,
button.jp-Dialog-button.jp-mod-styled.jp-mod-warn:focus,
button.jp-Dialog-button.jp-mod-styled.jp-mod-reject:focus {
  outline-offset: 4px;
  -moz-outline-radius: 0;
}

button.jp-Dialog-button.jp-mod-styled.jp-mod-accept:focus {
  outline: 1px solid var(--jp-accept-color-normal, var(--jp-brand-color1));
}

button.jp-Dialog-button.jp-mod-styled.jp-mod-warn:focus {
  outline: 1px solid var(--jp-warn-color-normal, var(--jp-error-color1));
}

button.jp-Dialog-button.jp-mod-styled.jp-mod-reject:focus {
  outline: 1px solid var(--jp-reject-color-normal, var(--md-grey-600));
}

button.jp-Dialog-close-button {
  padding: 0;
  height: 100%;
  min-width: unset;
  min-height: unset;
}

.jp-Dialog-header {
  display: flex;
  justify-content: space-between;
  flex: 0 0 auto;
  padding-bottom: 12px;
  font-size: var(--jp-ui-font-size3);
  font-weight: 400;
  color: var(--jp-ui-font-color1);
}

.jp-Dialog-body {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  font-size: var(--jp-ui-font-size1);
  background: var(--jp-layout-color1);
  color: var(--jp-ui-font-color1);
  overflow: auto;
}

.jp-Dialog-footer {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  flex: 0 0 auto;
  margin-left: -12px;
  margin-right: -12px;
  padding: 12px;
}

.jp-Dialog-checkbox {
  padding-right: 5px;
}

.jp-Dialog-checkbox > input:focus-visible {
  outline: 1px solid var(--jp-input-active-border-color);
  outline-offset: 1px;
}

.jp-Dialog-spacer {
  flex: 1 1 auto;
}

.jp-Dialog-title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.jp-Dialog-body > .jp-select-wrapper {
  width: 100%;
}

.jp-Dialog-body > button {
  padding: 0 16px;
}

.jp-Dialog-body > label {
  line-height: 1.4;
  color: var(--jp-ui-font-color0);
}

.jp-Dialog-button.jp-mod-styled:not(:last-child) {
  margin-right: 12px;
}

/*
 * Copyright (c) Jupyter Development Team.
 * Distributed under the terms of the Modified BSD License.
 */

.jp-Input-Boolean-Dialog {
  flex-direction: row-reverse;
  align-items: end;
  width: 100%;
}

.jp-Input-Boolean-Dialog > label {
  flex: 1 1 auto;
}

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2016, Jupyter Development Team.
|
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-MainAreaWidget > :focus {
  outline: none;
}

.jp-MainAreaWidget .jp-MainAreaWidget-error {
  padding: 6px;
}

.jp-MainAreaWidget .jp-MainAreaWidget-error > pre {
  width: auto;
  padding: 10px;
  background: var(--jp-error-color3);
  border: var(--jp-border-width) solid var(--jp-error-color1);
  border-radius: var(--jp-border-radius);
  color: var(--jp-ui-font-color1);
  font-size: var(--jp-ui-font-size1);
  white-space: pre-wrap;
  word-wrap: break-word;
}

/*
 * Copyright (c) Jupyter Development Team.
 * Distributed under the terms of the Modified BSD License.
 */

/**
 * google-material-color v1.2.6
 * https://github.com/danlevan/google-material-color
 */
:root {
  --md-red-50: #ffebee;
  --md-red-100: #ffcdd2;
  --md-red-200: #ef9a9a;
  --md-red-300: #e57373;
  --md-red-400: #ef5350;
  --md-red-500: #f44336;
  --md-red-600: #e53935;
  --md-red-700: #d32f2f;
  --md-red-800: #c62828;
  --md-red-900: #b71c1c;
  --md-red-A100: #ff8a80;
  --md-red-A200: #ff5252;
  --md-red-A400: #ff1744;
  --md-red-A700: #d50000;
  --md-pink-50: #fce4ec;
  --md-pink-100: #f8bbd0;
  --md-pink-200: #f48fb1;
  --md-pink-300: #f06292;
  --md-pink-400: #ec407a;
  --md-pink-500: #e91e63;
  --md-pink-600: #d81b60;
  --md-pink-700: #c2185b;
  --md-pink-800: #ad1457;
  --md-pink-900: #880e4f;
  --md-pink-A100: #ff80ab;
  --md-pink-A200: #ff4081;
  --md-pink-A400: #f50057;
  --md-pink-A700: #c51162;
  --md-purple-50: #f3e5f5;
  --md-purple-100: #e1bee7;
  --md-purple-200: #ce93d8;
  --md-purple-300: #ba68c8;
  --md-purple-400: #ab47bc;
  --md-purple-500: #9c27b0;
  --md-purple-600: #8e24aa;
  --md-purple-700: #7b1fa2;
  --md-purple-800: #6a1b9a;
  --md-purple-900: #4a148c;
  --md-purple-A100: #ea80fc;
  --md-purple-A200: #e040fb;
  --md-purple-A400: #d500f9;
  --md-purple-A700: #a0f;
  --md-deep-purple-50: #ede7f6;
  --md-deep-purple-100: #d1c4e9;
  --md-deep-purple-200: #b39ddb;
  --md-deep-purple-300: #9575cd;
  --md-deep-purple-400: #7e57c2;
  --md-deep-purple-500: #673ab7;
  --md-deep-purple-600: #5e35b1;
  --md-deep-purple-700: #512da8;
  --md-deep-purple-800: #4527a0;
  --md-deep-purple-900: #311b92;
  --md-deep-purple-A100: #b388ff;
  --md-deep-purple-A200: #7c4dff;
  --md-deep-purple-A400: #651fff;
  --md-deep-purple-A700: #6200ea;
  --md-indigo-50: #e8eaf6;
  --md-indigo-100: #c5cae9;
  --md-indigo-200: #9fa8da;
  --md-indigo-300: #7986cb;
  --md-indigo-400: #5c6bc0;
  --md-indigo-500: #3f51b5;
  --md-indigo-600: #3949ab;
  --md-indigo-700: #303f9f;
  --md-indigo-800: #283593;
  --md-indigo-900: #1a237e;
  --md-indigo-A100: #8c9eff;
  --md-indigo-A200: #536dfe;
  --md-indigo-A400: #3d5afe;
  --md-indigo-A700: #304ffe;
  --md-blue-50: #e3f2fd;
  --md-blue-100: #bbdefb;
  --md-blue-200: #90caf9;
  --md-blue-300: #64b5f6;
  --md-blue-400: #42a5f5;
  --md-blue-500: #2196f3;
  --md-blue-600: #1e88e5;
  --md-blue-700: #1976d2;
  --md-blue-800: #1565c0;
  --md-blue-900: #0d47a1;
  --md-blue-A100: #82b1ff;
  --md-blue-A200: #448aff;
  --md-blue-A400: #2979ff;
  --md-blue-A700: #2962ff;
  --md-light-blue-50: #e1f5fe;
  --md-light-blue-100: #b3e5fc;
  --md-light-blue-200: #81d4fa;
  --md-light-blue-300: #4fc3f7;
  --md-light-blue-400: #29b6f6;
  --md-light-blue-500: #03a9f4;
  --md-light-blue-600: #039be5;
  --md-light-blue-700: #0288d1;
  --md-light-blue-800: #0277bd;
  --md-light-blue-900: #01579b;
  --md-light-blue-A100: #80d8ff;
  --md-light-blue-A200: #40c4ff;
  --md-light-blue-A400: #00b0ff;
  --md-light-blue-A700: #0091ea;
  --md-cyan-50: #e0f7fa;
  --md-cyan-100: #b2ebf2;
  --md-cyan-200: #80deea;
  --md-cyan-300: #4dd0e1;
  --md-cyan-400: #26c6da;
  --md-cyan-500: #00bcd4;
  --md-cyan-600: #00acc1;
  --md-cyan-700: #0097a7;
  --md-cyan-800: #00838f;
  --md-cyan-900: #006064;
  --md-cyan-A100: #84ffff;
  --md-cyan-A200: #18ffff;
  --md-cyan-A400: #00e5ff;
  --md-cyan-A700: #00b8d4;
  --md-teal-50: #e0f2f1;
  --md-teal-100: #b2dfdb;
  --md-teal-200: #80cbc4;
  --md-teal-300: #4db6ac;
  --md-teal-400: #26a69a;
  --md-teal-500: #009688;
  --md-teal-600: #00897b;
  --md-teal-700: #00796b;
  --md-teal-800: #00695c;
  --md-teal-900: #004d40;
  --md-teal-A100: #a7ffeb;
  --md-teal-A200: #64ffda;
  --md-teal-A400: #1de9b6;
  --md-teal-A700: #00bfa5;
  --md-green-50: #e8f5e9;
  --md-green-100: #c8e6c9;
  --md-green-200: #a5d6a7;
  --md-green-300: #81c784;
  --md-green-400: #66bb6a;
  --md-green-500: #4caf50;
  --md-green-600: #43a047;
  --md-green-700: #388e3c;
  --md-green-800: #2e7d32;
  --md-green-900: #1b5e20;
  --md-green-A100: #b9f6ca;
  --md-green-A200: #69f0ae;
  --md-green-A400: #00e676;
  --md-green-A700: #00c853;
  --md-light-green-50: #f1f8e9;
  --md-light-green-100: #dcedc8;
  --md-light-green-200: #c5e1a5;
  --md-light-green-300: #aed581;
  --md-light-green-400: #9ccc65;
  --md-light-green-500: #8bc34a;
  --md-light-green-600: #7cb342;
  --md-light-green-700: #689f38;
  --md-light-green-800: #558b2f;
  --md-light-green-900: #33691e;
  --md-light-green-A100: #ccff90;
  --md-light-green-A200: #b2ff59;
  --md-light-green-A400: #76ff03;
  --md-light-green-A700: #64dd17;
  --md-lime-50: #f9fbe7;
  --md-lime-100: #f0f4c3;
  --md-lime-200: #e6ee9c;
  --md-lime-300: #dce775;
  --md-lime-400: #d4e157;
  --md-lime-500: #cddc39;
  --md-lime-600: #c0ca33;
  --md-lime-700: #afb42b;
  --md-lime-800: #9e9d24;
  --md-lime-900: #827717;
  --md-lime-A100: #f4ff81;
  --md-lime-A200: #eeff41;
  --md-lime-A400: #c6ff00;
  --md-lime-A700: #aeea00;
  --md-yellow-50: #fffde7;
  --md-yellow-100: #fff9c4;
  --md-yellow-200: #fff59d;
  --md-yellow-300: #fff176;
  --md-yellow-400: #ffee58;
  --md-yellow-500: #ffeb3b;
  --md-yellow-600: #fdd835;
  --md-yellow-700: #fbc02d;
  --md-yellow-800: #f9a825;
  --md-yellow-900: #f57f17;
  --md-yellow-A100: #ffff8d;
  --md-yellow-A200: #ff0;
  --md-yellow-A400: #ffea00;
  --md-yellow-A700: #ffd600;
  --md-amber-50: #fff8e1;
  --md-amber-100: #ffecb3;
  --md-amber-200: #ffe082;
  --md-amber-300: #ffd54f;
  --md-amber-400: #ffca28;
  --md-amber-500: #ffc107;
  --md-amber-600: #ffb300;
  --md-amber-700: #ffa000;
  --md-amber-800: #ff8f00;
  --md-amber-900: #ff6f00;
  --md-amber-A100: #ffe57f;
  --md-amber-A200: #ffd740;
  --md-amber-A400: #ffc400;
  --md-amber-A700: #ffab00;
  --md-orange-50: #fff3e0;
  --md-orange-100: #ffe0b2;
  --md-orange-200: #ffcc80;
  --md-orange-300: #ffb74d;
  --md-orange-400: #ffa726;
  --md-orange-500: #ff9800;
  --md-orange-600: #fb8c00;
  --md-orange-700: #f57c00;
  --md-orange-800: #ef6c00;
  --md-orange-900: #e65100;
  --md-orange-A100: #ffd180;
  --md-orange-A200: #ffab40;
  --md-orange-A400: #ff9100;
  --md-orange-A700: #ff6d00;
  --md-deep-orange-50: #fbe9e7;
  --md-deep-orange-100: #ffccbc;
  --md-deep-orange-200: #ffab91;
  --md-deep-orange-300: #ff8a65;
  --md-deep-orange-400: #ff7043;
  --md-deep-orange-500: #ff5722;
  --md-deep-orange-600: #f4511e;
  --md-deep-orange-700: #e64a19;
  --md-deep-orange-800: #d84315;
  --md-deep-orange-900: #bf360c;
  --md-deep-orange-A100: #ff9e80;
  --md-deep-orange-A200: #ff6e40;
  --md-deep-orange-A400: #ff3d00;
  --md-deep-orange-A700: #dd2c00;
  --md-brown-50: #efebe9;
  --md-brown-100: #d7ccc8;
  --md-brown-200: #bcaaa4;
  --md-brown-300: #a1887f;
  --md-brown-400: #8d6e63;
  --md-brown-500: #795548;
  --md-brown-600: #6d4c41;
  --md-brown-700: #5d4037;
  --md-brown-800: #4e342e;
  --md-brown-900: #3e2723;
  --md-grey-50: #fafafa;
  --md-grey-100: #f5f5f5;
  --md-grey-200: #eee;
  --md-grey-300: #e0e0e0;
  --md-grey-400: #bdbdbd;
  --md-grey-500: #9e9e9e;
  --md-grey-600: #757575;
  --md-grey-700: #616161;
  --md-grey-800: #424242;
  --md-grey-900: #212121;
  --md-blue-grey-50: #eceff1;
  --md-blue-grey-100: #cfd8dc;
  --md-blue-grey-200: #b0bec5;
  --md-blue-grey-300: #90a4ae;
  --md-blue-grey-400: #78909c;
  --md-blue-grey-500: #607d8b;
  --md-blue-grey-600: #546e7a;
  --md-blue-grey-700: #455a64;
  --md-blue-grey-800: #37474f;
  --md-blue-grey-900: #263238;
}

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2017, Jupyter Development Team.
|
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| RenderedText
|----------------------------------------------------------------------------*/

:root {
  /* This is the padding value to fill the gaps between lines containing spans with background color. */
  --jp-private-code-span-padding: calc(
    (var(--jp-code-line-height) - 1) * var(--jp-code-font-size) / 2
  );
}

.jp-RenderedText {
  text-align: left;
  padding-left: var(--jp-code-padding);
  line-height: var(--jp-code-line-height);
  font-family: var(--jp-code-font-family);
}

.jp-RenderedText pre,
.jp-RenderedJavaScript pre,
.jp-RenderedHTMLCommon pre {
  color: var(--jp-content-font-color1);
  font-size: var(--jp-code-font-size);
  border: none;
  margin: 0;
  padding: 0;
}

.jp-RenderedText pre a:link {
  text-decoration: none;
  color: var(--jp-content-link-color);
}

.jp-RenderedText pre a:hover {
  text-decoration: underline;
  color: var(--jp-content-link-color);
}

.jp-RenderedText pre a:visited {
  text-decoration: none;
  color: var(--jp-content-link-color);
}

/* console foregrounds and backgrounds */
.jp-RenderedText pre .ansi-black-fg {
  color: #3e424d;
}

.jp-RenderedText pre .ansi-red-fg {
  color: #e75c58;
}

.jp-RenderedText pre .ansi-green-fg {
  color: #00a250;
}

.jp-RenderedText pre .ansi-yellow-fg {
  color: #ddb62b;
}

.jp-RenderedText pre .ansi-blue-fg {
  color: #208ffb;
}

.jp-RenderedText pre .ansi-magenta-fg {
  color: #d160c4;
}

.jp-RenderedText pre .ansi-cyan-fg {
  color: #60c6c8;
}

.jp-RenderedText pre .ansi-white-fg {
  color: #c5c1b4;
}

.jp-RenderedText pre .ansi-black-bg {
  background-color: #3e424d;
  padding: var(--jp-private-code-span-padding) 0;
}

.jp-RenderedText pre .ansi-red-bg {
  background-color: #e75c58;
  padding: var(--jp-private-code-span-padding) 0;
}

.jp-RenderedText pre .ansi-green-bg {
  background-color: #00a250;
  padding: var(--jp-private-code-span-padding) 0;
}

.jp-RenderedText pre .ansi-yellow-bg {
  background-color: #ddb62b;
  padding: var(--jp-private-code-span-padding) 0;
}

.jp-RenderedText pre .ansi-blue-bg {
  background-color: #208ffb;
  padding: var(--jp-private-code-span-padding) 0;
}

.jp-RenderedText pre .ansi-magenta-bg {
  background-color: #d160c4;
  padding: var(--jp-private-code-span-padding) 0;
}

.jp-RenderedText pre .ansi-cyan-bg {
  background-color: #60c6c8;
  padding: var(--jp-private-code-span-padding) 0;
}

.jp-RenderedText pre .ansi-white-bg {
  background-color: #c5c1b4;
  padding: var(--jp-private-code-span-padding) 0;
}

.jp-RenderedText pre .ansi-black-intense-fg {
  color: #282c36;
}

.jp-RenderedText pre .ansi-red-intense-fg {
  color: #b22b31;
}

.jp-RenderedText pre .ansi-green-intense-fg {
  color: #007427;
}

.jp-RenderedText pre .ansi-yellow-intense-fg {
  color: #b27d12;
}

.jp-RenderedText pre .ansi-blue-intense-fg {
  color: #0065ca;
}

.jp-RenderedText pre .ansi-magenta-intense-fg {
  color: #a03196;
}

.jp-RenderedText pre .ansi-cyan-intense-fg {
  color: #258f8f;
}

.jp-RenderedText pre .ansi-white-intense-fg {
  color: #a1a6b2;
}

.jp-RenderedText pre .ansi-black-intense-bg {
  background-color: #282c36;
  padding: var(--jp-private-code-span-padding) 0;
}

.jp-RenderedText pre .ansi-red-intense-bg {
  background-color: #b22b31;
  padding: var(--jp-private-code-span-padding) 0;
}

.jp-RenderedText pre .ansi-green-intense-bg {
  background-color: #007427;
  padding: var(--jp-private-code-span-padding) 0;
}

.jp-RenderedText pre .ansi-yellow-intense-bg {
  background-color: #b27d12;
  padding: var(--jp-private-code-span-padding) 0;
}

.jp-RenderedText pre .ansi-blue-intense-bg {
  background-color: #0065ca;
  padding: var(--jp-private-code-span-padding) 0;
}

.jp-RenderedText pre .ansi-magenta-intense-bg {
  background-color: #a03196;
  padding: var(--jp-private-code-span-padding) 0;
}

.jp-RenderedText pre .ansi-cyan-intense-bg {
  background-color: #258f8f;
  padding: var(--jp-private-code-span-padding) 0;
}

.jp-RenderedText pre .ansi-white-intense-bg {
  background-color: #a1a6b2;
  padding: var(--jp-private-code-span-padding) 0;
}

.jp-RenderedText pre .ansi-default-inverse-fg {
  color: var(--jp-ui-inverse-font-color0);
}

.jp-RenderedText pre .ansi-default-inverse-bg {
  background-color: var(--jp-inverse-layout-color0);
  padding: var(--jp-private-code-span-padding) 0;
}

.jp-RenderedText pre .ansi-bold {
  font-weight: bold;
}

.jp-RenderedText pre .ansi-underline {
  text-decoration: underline;
}

.jp-RenderedText[data-mime-type='application/vnd.jupyter.stderr'] {
  background: var(--jp-rendermime-error-background);
  padding-top: var(--jp-code-padding);
}

/*-----------------------------------------------------------------------------
| RenderedLatex
|----------------------------------------------------------------------------*/

.jp-RenderedLatex {
  color: var(--jp-content-font-color1);
  font-size: var(--jp-content-font-size1);
  line-height: var(--jp-content-line-height);
}

/* Left-justify outputs.*/
.jp-OutputArea-output.jp-RenderedLatex {
  padding: var(--jp-code-padding);
  text-align: left;
}

/*-----------------------------------------------------------------------------
| RenderedHTML
|----------------------------------------------------------------------------*/

.jp-RenderedHTMLCommon {
  color: var(--jp-content-font-color1);
  font-family: var(--jp-content-font-family);
  font-size: var(--jp-content-font-size1);
  line-height: var(--jp-content-line-height);

  /* Give a bit more R padding on Markdown text to keep line lengths reasonable */
  padding-right: 20px;
}

.jp-RenderedHTMLCommon em {
  font-style: italic;
}

.jp-RenderedHTMLCommon strong {
  font-weight: bold;
}

.jp-RenderedHTMLCommon u {
  text-decoration: underline;
}

.jp-RenderedHTMLCommon a:link {
  text-decoration: none;
  color: var(--jp-content-link-color);
}

.jp-RenderedHTMLCommon a:hover {
  text-decoration: underline;
  color: var(--jp-content-link-color);
}

.jp-RenderedHTMLCommon a:visited {
  text-decoration: none;
  color: var(--jp-content-link-color);
}

/* Headings */

.jp-RenderedHTMLCommon h1,
.jp-RenderedHTMLCommon h2,
.jp-RenderedHTMLCommon h3,
.jp-RenderedHTMLCommon h4,
.jp-RenderedHTMLCommon h5,
.jp-RenderedHTMLCommon h6 {
  line-height: var(--jp-content-heading-line-height);
  font-weight: var(--jp-content-heading-font-weight);
  font-style: normal;
  margin: var(--jp-content-heading-margin-top) 0
    var(--jp-content-heading-margin-bottom) 0;
}

.jp-RenderedHTMLCommon h1:first-child,
.jp-RenderedHTMLCommon h2:first-child,
.jp-RenderedHTMLCommon h3:first-child,
.jp-RenderedHTMLCommon h4:first-child,
.jp-RenderedHTMLCommon h5:first-child,
.jp-RenderedHTMLCommon h6:first-child {
  margin-top: calc(0.5 * var(--jp-content-heading-margin-top));
}

.jp-RenderedHTMLCommon h1:last-child,
.jp-RenderedHTMLCommon h2:last-child,
.jp-RenderedHTMLCommon h3:last-child,
.jp-RenderedHTMLCommon h4:last-child,
.jp-RenderedHTMLCommon h5:last-child,
.jp-RenderedHTMLCommon h6:last-child {
  margin-bottom: calc(0.5 * var(--jp-content-heading-margin-bottom));
}

.jp-RenderedHTMLCommon h1 {
  font-size: var(--jp-content-font-size5);
}

.jp-RenderedHTMLCommon h2 {
  font-size: var(--jp-content-font-size4);
}

.jp-RenderedHTMLCommon h3 {
  font-size: var(--jp-content-font-size3);
}

.jp-RenderedHTMLCommon h4 {
  font-size: var(--jp-content-font-size2);
}

.jp-RenderedHTMLCommon h5 {
  font-size: var(--jp-content-font-size1);
}

.jp-RenderedHTMLCommon h6 {
  font-size: var(--jp-content-font-size0);
}

/* Lists */

/* stylelint-disable selector-max-type, selector-max-compound-selectors */

.jp-RenderedHTMLCommon ul:not(.list-inline),
.jp-RenderedHTMLCommon ol:not(.list-inline) {
  padding-left: 2em;
}

.jp-RenderedHTMLCommon ul {
  list-style: disc;
}

.jp-RenderedHTMLCommon ul ul {
  list-style: square;
}

.jp-RenderedHTMLCommon ul ul ul {
  list-style: circle;
}

.jp-RenderedHTMLCommon ol {
  list-style: decimal;
}

.jp-RenderedHTMLCommon ol ol {
  list-style: upper-alpha;
}

.jp-RenderedHTMLCommon ol ol ol {
  list-style: lower-alpha;
}

.jp-RenderedHTMLCommon ol ol ol ol {
  list-style: lower-roman;
}

.jp-RenderedHTMLCommon ol ol ol ol ol {
  list-style: decimal;
}

.jp-RenderedHTMLCommon ol,
.jp-RenderedHTMLCommon ul {
  margin-bottom: 1em;
}

.jp-RenderedHTMLCommon ul ul,
.jp-RenderedHTMLCommon ul ol,
.jp-RenderedHTMLCommon ol ul,
.jp-RenderedHTMLCommon ol ol {
  margin-bottom: 0;
}

/* stylelint-enable selector-max-type, selector-max-compound-selectors */

.jp-RenderedHTMLCommon hr {
  color: var(--jp-border-color2);
  background-color: var(--jp-border-color1);
  margin-top: 1em;
  margin-bottom: 1em;
}

.jp-RenderedHTMLCommon > pre {
  margin: 1.5em 2em;
}

.jp-RenderedHTMLCommon pre,
.jp-RenderedHTMLCommon code {
  border: 0;
  background-color: var(--jp-layout-color0);
  color: var(--jp-content-font-color1);
  font-family: var(--jp-code-font-family);
  font-size: inherit;
  line-height: var(--jp-code-line-height);
  padding: 0;
  white-space: pre-wrap;
}

.jp-RenderedHTMLCommon :not(pre) > code {
  background-color: var(--jp-layout-color2);
  padding: 1px 5px;
}

/* Tables */

.jp-RenderedHTMLCommon table {
  border-collapse: collapse;
  border-spacing: 0;
  border: none;
  color: var(--jp-ui-font-color1);
  font-size: var(--jp-ui-font-size1);
  table-layout: fixed;
  margin-left: auto;
  margin-bottom: 1em;
  margin-right: auto;
}

.jp-RenderedHTMLCommon thead {
  border-bottom: var(--jp-border-width) solid var(--jp-border-color1);
  vertical-align: bottom;
}

.jp-RenderedHTMLCommon td,
.jp-RenderedHTMLCommon th,
.jp-RenderedHTMLCommon tr {
  vertical-align: middle;
  padding: 0.5em;
  line-height: normal;
  white-space: normal;
  max-width: none;
  border: none;
}

.jp-RenderedMarkdown.jp-RenderedHTMLCommon td,
.jp-RenderedMarkdown.jp-RenderedHTMLCommon th {
  max-width: none;
}

:not(.jp-RenderedMarkdown).jp-RenderedHTMLCommon td,
:not(.jp-RenderedMarkdown).jp-RenderedHTMLCommon th,
:not(.jp-RenderedMarkdown).jp-RenderedHTMLCommon tr {
  text-align: right;
}

.jp-RenderedHTMLCommon th {
  font-weight: bold;
}

.jp-RenderedHTMLCommon tbody tr:nth-child(odd) {
  background: var(--jp-layout-color0);
}

.jp-RenderedHTMLCommon tbody tr:nth-child(even) {
  background: var(--jp-rendermime-table-row-background);
}

.jp-RenderedHTMLCommon tbody tr:hover {
  background: var(--jp-rendermime-table-row-hover-background);
}

.jp-RenderedHTMLCommon p {
  text-align: left;
  margin: 0;
  margin-bottom: 1em;
}

.jp-RenderedHTMLCommon img {
  -moz-force-broken-image-icon: 1;
}

/* Restrict to direct children as other images could be nested in other content. */
.jp-RenderedHTMLCommon > img {
  display: block;
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 1em;
}

/* Change color behind transparent images if they need it... */
[data-jp-theme-light='false'] .jp-RenderedImage img.jp-needs-light-background {
  background-color: var(--jp-inverse-layout-color1);
}

[data-jp-theme-light='true'] .jp-RenderedImage img.jp-needs-dark-background {
  background-color: var(--jp-inverse-layout-color1);
}

.jp-RenderedHTMLCommon img,
.jp-RenderedImage img,
.jp-RenderedHTMLCommon svg,
.jp-RenderedSVG svg {
  max-width: 100%;
  height: auto;
}

.jp-RenderedHTMLCommon img.jp-mod-unconfined,
.jp-RenderedImage img.jp-mod-unconfined,
.jp-RenderedHTMLCommon svg.jp-mod-unconfined,
.jp-RenderedSVG svg.jp-mod-unconfined {
  max-width: none;
}

.jp-RenderedHTMLCommon .alert {
  padding: var(--jp-notebook-padding);
  border: var(--jp-border-width) solid transparent;
  border-radius: var(--jp-border-radius);
  margin-bottom: 1em;
}

.jp-RenderedHTMLCommon .alert-info {
  color: var(--jp-info-color0);
  background-color: var(--jp-info-color3);
  border-color: var(--jp-info-color2);
}

.jp-RenderedHTMLCommon .alert-info hr {
  border-color: var(--jp-info-color3);
}

.jp-RenderedHTMLCommon .alert-info > p:last-child,
.jp-RenderedHTMLCommon .alert-info > ul:last-child {
  margin-bottom: 0;
}

.jp-RenderedHTMLCommon .alert-warning {
  color: var(--jp-warn-color0);
  background-color: var(--jp-warn-color3);
  border-color: var(--jp-warn-color2);
}

.jp-RenderedHTMLCommon .alert-warning hr {
  border-color: var(--jp-warn-color3);
}

.jp-RenderedHTMLCommon .alert-warning > p:last-child,
.jp-RenderedHTMLCommon .alert-warning > ul:last-child {
  margin-bottom: 0;
}

.jp-RenderedHTMLCommon .alert-success {
  color: var(--jp-success-color0);
  background-color: var(--jp-success-color3);
  border-color: var(--jp-success-color2);
}

.jp-RenderedHTMLCommon .alert-success hr {
  border-color: var(--jp-success-color3);
}

.jp-RenderedHTMLCommon .alert-success > p:last-child,
.jp-RenderedHTMLCommon .alert-success > ul:last-child {
  margin-bottom: 0;
}

.jp-RenderedHTMLCommon .alert-danger {
  color: var(--jp-error-color0);
  background-color: var(--jp-error-color3);
  border-color: var(--jp-error-color2);
}

.jp-RenderedHTMLCommon .alert-danger hr {
  border-color: var(--jp-error-color3);
}

.jp-RenderedHTMLCommon .alert-danger > p:last-child,
.jp-RenderedHTMLCommon .alert-danger > ul:last-child {
  margin-bottom: 0;
}

.jp-RenderedHTMLCommon blockquote {
  margin: 1em 2em;
  padding: 0 1em;
  border-left: 5px solid var(--jp-border-color2);
}

a.jp-InternalAnchorLink {
  visibility: hidden;
  margin-left: 8px;
  color: var(--md-blue-800);
}

h1:hover .jp-InternalAnchorLink,
h2:hover .jp-InternalAnchorLink,
h3:hover .jp-InternalAnchorLink,
h4:hover .jp-InternalAnchorLink,
h5:hover .jp-InternalAnchorLink,
h6:hover .jp-InternalAnchorLink {
  visibility: visible;
}

.jp-RenderedHTMLCommon kbd {
  background-color: var(--jp-rendermime-table-row-background);
  border: 1px solid var(--jp-border-color0);
  border-bottom-color: var(--jp-border-color2);
  border-radius: 3px;
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.25);
  display: inline-block;
  font-size: var(--jp-ui-font-size0);
  line-height: 1em;
  padding: 0.2em 0.5em;
}

/* Most direct children of .jp-RenderedHTMLCommon have a margin-bottom of 1.0.
 * At the bottom of cells this is a bit too much as there is also spacing
 * between cells. Going all the way to 0 gets too tight between markdown and
 * code cells.
 */
.jp-RenderedHTMLCommon > *:last-child {
  margin-bottom: 0.5em;
}

/*
 * Copyright (c) Jupyter Development Team.
 * Distributed under the terms of the Modified BSD License.
 */

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/

.lm-cursor-backdrop {
  position: fixed;
  width: 200px;
  height: 200px;
  margin-top: -100px;
  margin-left: -100px;
  will-change: transform;
  z-index: 100;
}

.lm-mod-drag-image {
  will-change: transform;
}

/*
 * Copyright (c) Jupyter Development Team.
 * Distributed under the terms of the Modified BSD License.
 */

.jp-lineFormSearch {
  padding: 4px 12px;
  background-color: var(--jp-layout-color2);
  box-shadow: var(--jp-toolbar-box-shadow);
  z-index: 2;
  font-size: var(--jp-ui-font-size1);
}

.jp-lineFormCaption {
  font-size: var(--jp-ui-font-size0);
  line-height: var(--jp-ui-font-size1);
  margin-top: 4px;
  color: var(--jp-ui-font-color0);
}

.jp-baseLineForm {
  border: none;
  border-radius: 0;
  position: absolute;
  background-size: 16px;
  background-repeat: no-repeat;
  background-position: center;
  outline: none;
}

.jp-lineFormButtonContainer {
  top: 4px;
  right: 8px;
  height: 24px;
  padding: 0 12px;
  width: 12px;
}

.jp-lineFormButtonIcon {
  top: 0;
  right: 0;
  background-color: var(--jp-brand-color1);
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 4px 6px;
}

.jp-lineFormButton {
  top: 0;
  right: 0;
  background-color: transparent;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}

.jp-lineFormWrapper {
  overflow: hidden;
  padding: 0 8px;
  border: 1px solid var(--jp-border-color0);
  background-color: var(--jp-input-active-background);
  height: 22px;
}

.jp-lineFormWrapperFocusWithin {
  border: var(--jp-border-width) solid var(--md-blue-500);
  box-shadow: inset 0 0 4px var(--md-blue-300);
}

.jp-lineFormInput {
  background: transparent;
  width: 200px;
  height: 100%;
  border: none;
  outline: none;
  color: var(--jp-ui-font-color0);
  line-height: 28px;
}

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2016, Jupyter Development Team.
|
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-JSONEditor {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.jp-JSONEditor-host {
  flex: 1 1 auto;
  border: var(--jp-border-width) solid var(--jp-input-border-color);
  border-radius: 0;
  background: var(--jp-layout-color0);
  min-height: 50px;
  padding: 1px;
}

.jp-JSONEditor.jp-mod-error .jp-JSONEditor-host {
  border-color: red;
  outline-color: red;
}

.jp-JSONEditor-header {
  display: flex;
  flex: 1 0 auto;
  padding: 0 0 0 12px;
}

.jp-JSONEditor-header label {
  flex: 0 0 auto;
}

.jp-JSONEditor-commitButton {
  height: 16px;
  width: 16px;
  background-size: 18px;
  background-repeat: no-repeat;
  background-position: center;
}

.jp-JSONEditor-host.jp-mod-focused {
  background-color: var(--jp-input-active-background);
  border: 1px solid var(--jp-input-active-border-color);
  box-shadow: var(--jp-input-box-shadow);
}

.jp-Editor.jp-mod-dropTarget {
  border: var(--jp-border-width) solid var(--jp-input-active-border-color);
  box-shadow: var(--jp-input-box-shadow);
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/
.jp-DocumentSearch-input {
  border: none;
  outline: none;
  color: var(--jp-ui-font-color0);
  font-size: var(--jp-ui-font-size1);
  background-color: var(--jp-layout-color0);
  font-family: var(--jp-ui-font-family);
  padding: 2px 1px;
  resize: none;
}

.jp-DocumentSearch-overlay {
  position: absolute;
  background-color: var(--jp-toolbar-background);
  border-bottom: var(--jp-border-width) solid var(--jp-toolbar-border-color);
  border-left: var(--jp-border-width) solid var(--jp-toolbar-border-color);
  top: 0;
  right: 0;
  z-index: 7;
  min-width: 405px;
  padding: 2px;
  font-size: var(--jp-ui-font-size1);

  --jp-private-document-search-button-height: 20px;
}

.jp-DocumentSearch-overlay button {
  background-color: var(--jp-toolbar-background);
  outline: 0;
}

.jp-DocumentSearch-overlay button:hover {
  background-color: var(--jp-layout-color2);
}

.jp-DocumentSearch-overlay button:active {
  background-color: var(--jp-layout-color3);
}

.jp-DocumentSearch-overlay-row {
  display: flex;
  align-items: center;
  margin-bottom: 2px;
}

.jp-DocumentSearch-button-content {
  display: inline-block;
  cursor: pointer;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}

.jp-DocumentSearch-button-content svg {
  width: 100%;
  height: 100%;
}

.jp-DocumentSearch-input-wrapper {
  border: var(--jp-border-width) solid var(--jp-border-color0);
  display: flex;
  background-color: var(--jp-layout-color0);
  margin: 2px;
}

.jp-DocumentSearch-input-wrapper:focus-within {
  border-color: var(--jp-cell-editor-active-border-color);
}

.jp-DocumentSearch-toggle-wrapper,
.jp-DocumentSearch-button-wrapper {
  all: initial;
  overflow: hidden;
  display: inline-block;
  border: none;
  box-sizing: border-box;
}

.jp-DocumentSearch-toggle-wrapper {
  width: 14px;
  height: 14px;
}

.jp-DocumentSearch-button-wrapper {
  width: var(--jp-private-document-search-button-height);
  height: var(--jp-private-document-search-button-height);
}

.jp-DocumentSearch-toggle-wrapper:focus,
.jp-DocumentSearch-button-wrapper:focus {
  outline: var(--jp-border-width) solid
    var(--jp-cell-editor-active-border-color);
  outline-offset: -1px;
}

.jp-DocumentSearch-toggle-wrapper,
.jp-DocumentSearch-button-wrapper,
.jp-DocumentSearch-button-content:focus {
  outline: none;
}

.jp-DocumentSearch-toggle-placeholder {
  width: 5px;
}

.jp-DocumentSearch-input-button::before {
  display: block;
  padding-top: 100%;
}

.jp-DocumentSearch-input-button-off {
  opacity: var(--jp-search-toggle-off-opacity);
}

.jp-DocumentSearch-input-button-off:hover {
  opacity: var(--jp-search-toggle-hover-opacity);
}

.jp-DocumentSearch-input-button-on {
  opacity: var(--jp-search-toggle-on-opacity);
}

.jp-DocumentSearch-index-counter {
  padding-left: 10px;
  padding-right: 10px;
  user-select: none;
  min-width: 35px;
  display: inline-block;
}

.jp-DocumentSearch-up-down-wrapper {
  display: inline-block;
  padding-right: 2px;
  margin-left: auto;
  white-space: nowrap;
}

.jp-DocumentSearch-spacer {
  margin-left: auto;
}

.jp-DocumentSearch-up-down-wrapper button {
  outline: 0;
  border: none;
  width: var(--jp-private-document-search-button-height);
  height: var(--jp-private-document-search-button-height);
  vertical-align: middle;
  margin: 1px 5px 2px;
}

.jp-DocumentSearch-up-down-button:hover {
  background-color: var(--jp-layout-color2);
}

.jp-DocumentSearch-up-down-button:active {
  background-color: var(--jp-layout-color3);
}

.jp-DocumentSearch-filter-button {
  border-radius: var(--jp-border-radius);
}

.jp-DocumentSearch-filter-button:hover {
  background-color: var(--jp-layout-color2);
}

.jp-DocumentSearch-filter-button-enabled {
  background-color: var(--jp-layout-color2);
}

.jp-DocumentSearch-filter-button-enabled:hover {
  background-color: var(--jp-layout-color3);
}

.jp-DocumentSearch-search-options {
  padding: 0 8px;
  margin-left: 3px;
  width: 100%;
  display: grid;
  justify-content: start;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: stretch;
}

.jp-DocumentSearch-search-filter-disabled {
  color: var(--jp-ui-font-color2);
}

.jp-DocumentSearch-search-filter {
  display: flex;
  align-items: center;
  user-select: none;
}

.jp-DocumentSearch-regex-error {
  color: var(--jp-error-color0);
}

.jp-DocumentSearch-replace-button-wrapper {
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  border: var(--jp-border-width) solid var(--jp-border-color0);
  margin: auto 2px;
  padding: 1px 4px;
  height: calc(var(--jp-private-document-search-button-height) + 2px);
}

.jp-DocumentSearch-replace-button-wrapper:focus {
  border: var(--jp-border-width) solid var(--jp-cell-editor-active-border-color);
}

.jp-DocumentSearch-replace-button {
  display: inline-block;
  text-align: center;
  cursor: pointer;
  box-sizing: border-box;
  color: var(--jp-ui-font-color1);

  /* height - 2 * (padding of wrapper) */
  line-height: calc(var(--jp-private-document-search-button-height) - 2px);
  width: 100%;
  height: 100%;
}

.jp-DocumentSearch-replace-button:focus {
  outline: none;
}

.jp-DocumentSearch-replace-wrapper-class {
  margin-left: 14px;
  display: flex;
}

.jp-DocumentSearch-replace-toggle {
  border: none;
  background-color: var(--jp-toolbar-background);
  border-radius: var(--jp-border-radius);
}

.jp-DocumentSearch-replace-toggle:hover {
  background-color: var(--jp-layout-color2);
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.cm-editor {
  line-height: var(--jp-code-line-height);
  font-size: var(--jp-code-font-size);
  font-family: var(--jp-code-font-family);
  border: 0;
  border-radius: 0;
  height: auto;

  /* Changed to auto to autogrow */
}

.cm-editor pre {
  padding: 0 var(--jp-code-padding);
}

.jp-CodeMirrorEditor[data-type='inline'] .cm-dialog {
  background-color: var(--jp-layout-color0);
  color: var(--jp-content-font-color1);
}

.jp-CodeMirrorEditor {
  cursor: text;
}

/* When zoomed out 67% and 33% on a screen of 1440 width x 900 height */
@media screen and (min-width: 2138px) and (max-width: 4319px) {
  .jp-CodeMirrorEditor[data-type='inline'] .cm-cursor {
    border-left: var(--jp-code-cursor-width1) solid
      var(--jp-editor-cursor-color);
  }
}

/* When zoomed out less than 33% */
@media screen and (min-width: 4320px) {
  .jp-CodeMirrorEditor[data-type='inline'] .cm-cursor {
    border-left: var(--jp-code-cursor-width2) solid
      var(--jp-editor-cursor-color);
  }
}

.cm-editor.jp-mod-readOnly .cm-cursor {
  display: none;
}

.jp-CollaboratorCursor {
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: none;
  border-bottom: 3px solid;
  background-clip: content-box;
  margin-left: -5px;
  margin-right: -5px;
}

.cm-searching,
.cm-searching span {
  /* `.cm-searching span`: we need to override syntax highlighting */
  background-color: var(--jp-search-unselected-match-background-color);
  color: var(--jp-search-unselected-match-color);
}

.cm-searching::selection,
.cm-searching span::selection {
  background-color: var(--jp-search-unselected-match-background-color);
  color: var(--jp-search-unselected-match-color);
}

.jp-current-match > .cm-searching,
.jp-current-match > .cm-searching span,
.cm-searching > .jp-current-match,
.cm-searching > .jp-current-match span {
  background-color: var(--jp-search-selected-match-background-color);
  color: var(--jp-search-selected-match-color);
}

.jp-current-match > .cm-searching::selection,
.cm-searching > .jp-current-match::selection,
.jp-current-match > .cm-searching span::selection {
  background-color: var(--jp-search-selected-match-background-color);
  color: var(--jp-search-selected-match-color);
}

.cm-trailingspace {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAsElEQVQIHQGlAFr/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7+r3zKmT0/+pk9P/7+r3zAAAAAAAAAAABAAAAAAAAAAA6OPzM+/q9wAAAAAA6OPzMwAAAAAAAAAAAgAAAAAAAAAAGR8NiRQaCgAZIA0AGR8NiQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQyoYJ/SY80UAAAAASUVORK5CYII=);
  background-position: center left;
  background-repeat: repeat-x;
}

.jp-CollaboratorCursor-hover {
  position: absolute;
  z-index: 1;
  transform: translateX(-50%);
  color: white;
  border-radius: 3px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 1px;
  padding-bottom: 1px;
  text-align: center;
  font-size: var(--jp-ui-font-size1);
  white-space: nowrap;
}

.jp-CodeMirror-ruler {
  border-left: 1px dashed var(--jp-border-color2);
}

/* Styles for shared cursors (remote cursor locations and selected ranges) */
.jp-CodeMirrorEditor .cm-ySelectionCaret {
  position: relative;
  border-left: 1px solid black;
  margin-left: -1px;
  margin-right: -1px;
  box-sizing: border-box;
}

.jp-CodeMirrorEditor .cm-ySelectionCaret > .cm-ySelectionInfo {
  white-space: nowrap;
  position: absolute;
  top: -1.15em;
  padding-bottom: 0.05em;
  left: -1px;
  font-size: 0.95em;
  font-family: var(--jp-ui-font-family);
  font-weight: bold;
  line-height: normal;
  user-select: none;
  color: white;
  padding-left: 2px;
  padding-right: 2px;
  z-index: 101;
  transition: opacity 0.3s ease-in-out;
}

.jp-CodeMirrorEditor .cm-ySelectionInfo {
  transition-delay: 0.7s;
  opacity: 0;
}

.jp-CodeMirrorEditor .cm-ySelectionCaret:hover > .cm-ySelectionInfo {
  opacity: 1;
  transition-delay: 0s;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-MimeDocument {
  outline: none;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Variables
|----------------------------------------------------------------------------*/

:root {
  --jp-private-filebrowser-button-height: 28px;
  --jp-private-filebrowser-button-width: 48px;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-FileBrowser .jp-SidePanel-content {
  display: flex;
  flex-direction: column;
}

.jp-FileBrowser-toolbar.jp-Toolbar {
  flex-wrap: wrap;
  row-gap: 12px;
  border-bottom: none;
  height: auto;
  margin: 8px 12px 0;
  box-shadow: none;
  padding: 0;
  justify-content: flex-start;
}

.jp-FileBrowser-Panel {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
}

.jp-BreadCrumbs {
  flex: 0 0 auto;
  margin: 8px 12px;
}

.jp-BreadCrumbs-item {
  margin: 0 2px;
  padding: 0 2px;
  border-radius: var(--jp-border-radius);
  cursor: pointer;
}

.jp-BreadCrumbs-item:hover {
  background-color: var(--jp-layout-color2);
}

.jp-BreadCrumbs-item:first-child {
  margin-left: 0;
}

.jp-BreadCrumbs-item.jp-mod-dropTarget {
  background-color: var(--jp-brand-color2);
  opacity: 0.7;
}

/*-----------------------------------------------------------------------------
| Buttons
|----------------------------------------------------------------------------*/

.jp-FileBrowser-toolbar > .jp-Toolbar-item {
  flex: 0 0 auto;
  padding-left: 0;
  padding-right: 2px;
  align-items: center;
  height: unset;
}

.jp-FileBrowser-toolbar > .jp-Toolbar-item .jp-ToolbarButtonComponent {
  width: 40px;
}

/*-----------------------------------------------------------------------------
| Other styles
|----------------------------------------------------------------------------*/

.jp-FileDialog.jp-mod-conflict input {
  color: var(--jp-error-color1);
}

.jp-FileDialog .jp-new-name-title {
  margin-top: 12px;
}

.jp-LastModified-hidden {
  display: none;
}

.jp-FileSize-hidden {
  display: none;
}

.jp-FileBrowser .lm-AccordionPanel > h3:first-child {
  display: none;
}

/*-----------------------------------------------------------------------------
| DirListing
|----------------------------------------------------------------------------*/

.jp-DirListing {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  outline: 0;
}

.jp-DirListing-header {
  flex: 0 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
  border-top: var(--jp-border-width) solid var(--jp-border-color2);
  border-bottom: var(--jp-border-width) solid var(--jp-border-color1);
  box-shadow: var(--jp-toolbar-box-shadow);
  z-index: 2;
}

.jp-DirListing-headerItem {
  padding: 4px 12px 2px;
  font-weight: 500;
}

.jp-DirListing-headerItem:hover {
  background: var(--jp-layout-color2);
}

.jp-DirListing-headerItem.jp-id-name {
  flex: 1 0 84px;
}

.jp-DirListing-headerItem.jp-id-modified {
  flex: 0 0 112px;
  border-left: var(--jp-border-width) solid var(--jp-border-color2);
  text-align: right;
}

.jp-DirListing-headerItem.jp-id-filesize {
  flex: 0 0 75px;
  border-left: var(--jp-border-width) solid var(--jp-border-color2);
  text-align: right;
}

.jp-id-narrow {
  display: none;
  flex: 0 0 5px;
  padding: 4px;
  border-left: var(--jp-border-width) solid var(--jp-border-color2);
  text-align: right;
  color: var(--jp-border-color2);
}

.jp-DirListing-narrow .jp-id-narrow {
  display: block;
}

.jp-DirListing-narrow .jp-id-modified,
.jp-DirListing-narrow .jp-DirListing-itemModified {
  display: none;
}

.jp-DirListing-headerItem.jp-mod-selected {
  font-weight: 600;
}

/* increase specificity to override bundled default */
.jp-DirListing-content {
  flex: 1 1 auto;
  margin: 0;
  padding: 0;
  list-style-type: none;
  overflow: auto;
  background-color: var(--jp-layout-color1);
}

.jp-DirListing-content mark {
  color: var(--jp-ui-font-color0);
  background-color: transparent;
  font-weight: bold;
}

.jp-DirListing-content .jp-DirListing-item.jp-mod-selected mark {
  color: var(--jp-ui-inverse-font-color0);
}

/* Style the directory listing content when a user drops a file to upload */
.jp-DirListing.jp-mod-native-drop .jp-DirListing-content {
  outline: 5px dashed rgba(128, 128, 128, 0.5);
  outline-offset: -10px;
  cursor: copy;
}

.jp-DirListing-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 12px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.jp-DirListing-checkboxWrapper {
  /* Increases hit area of checkbox. */
  padding: 4px;
}

.jp-DirListing-header
  .jp-DirListing-checkboxWrapper
  + .jp-DirListing-headerItem {
  padding-left: 4px;
}

.jp-DirListing-content .jp-DirListing-checkboxWrapper {
  position: relative;
  left: -4px;
  margin: -4px 0 -4px -8px;
}

.jp-DirListing-checkboxWrapper.jp-mod-visible {
  visibility: visible;
}

/* For devices that support hovering, hide checkboxes until hovered, selected...
*/
@media (hover: hover) {
  .jp-DirListing-checkboxWrapper {
    visibility: hidden;
  }

  .jp-DirListing-item:hover .jp-DirListing-checkboxWrapper,
  .jp-DirListing-item.jp-mod-selected .jp-DirListing-checkboxWrapper {
    visibility: visible;
  }
}

.jp-DirListing-item[data-is-dot] {
  opacity: 75%;
}

.jp-DirListing-item.jp-mod-selected {
  color: var(--jp-ui-inverse-font-color1);
  background: var(--jp-brand-color1);
}

.jp-DirListing-item.jp-mod-dropTarget {
  background: var(--jp-brand-color3);
}

.jp-DirListing-item:hover:not(.jp-mod-selected) {
  background: var(--jp-layout-color2);
}

.jp-DirListing-itemIcon {
  flex: 0 0 20px;
  margin-right: 4px;
}

.jp-DirListing-itemText {
  flex: 1 0 64px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none;
}

.jp-DirListing-itemText:focus {
  outline-width: 2px;
  outline-color: var(--jp-inverse-layout-color1);
  outline-style: solid;
  outline-offset: 1px;
}

.jp-DirListing-item.jp-mod-selected .jp-DirListing-itemText:focus {
  outline-color: var(--jp-layout-color1);
}

.jp-DirListing-itemModified {
  flex: 0 0 125px;
  text-align: right;
}

.jp-DirListing-itemFileSize {
  flex: 0 0 90px;
  text-align: right;
}

.jp-DirListing-editor {
  flex: 1 0 64px;
  outline: none;
  border: none;
  color: var(--jp-ui-font-color1);
  background-color: var(--jp-layout-color1);
}

.jp-DirListing-item.jp-mod-running .jp-DirListing-itemIcon::before {
  color: var(--jp-success-color1);
  content: '\25CF';
  font-size: 8px;
  position: absolute;
  left: -8px;
}

.jp-DirListing-item.jp-mod-running.jp-mod-selected
  .jp-DirListing-itemIcon::before {
  color: var(--jp-ui-inverse-font-color1);
}

.jp-DirListing-item.lm-mod-drag-image,
.jp-DirListing-item.jp-mod-selected.lm-mod-drag-image {
  font-size: var(--jp-ui-font-size1);
  padding-left: 4px;
  margin-left: 4px;
  width: 160px;
  background-color: var(--jp-ui-inverse-font-color2);
  box-shadow: var(--jp-elevation-z2);
  border-radius: 0;
  color: var(--jp-ui-font-color1);
  transform: translateX(-40%) translateY(-58%);
}

.jp-Document {
  min-width: 120px;
  min-height: 120px;
  outline: none;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Main OutputArea
| OutputArea has a list of Outputs
|----------------------------------------------------------------------------*/

.jp-OutputArea {
  overflow-y: auto;
}

.jp-OutputArea-child {
  display: table;
  table-layout: fixed;
  width: 100%;
  overflow: hidden;
}

.jp-OutputPrompt {
  width: var(--jp-cell-prompt-width);
  color: var(--jp-cell-outprompt-font-color);
  font-family: var(--jp-cell-prompt-font-family);
  padding: var(--jp-code-padding);
  letter-spacing: var(--jp-cell-prompt-letter-spacing);
  line-height: var(--jp-code-line-height);
  font-size: var(--jp-code-font-size);
  border: var(--jp-border-width) solid transparent;
  opacity: var(--jp-cell-prompt-opacity);

  /* Right align prompt text, don't wrap to handle large prompt numbers */
  text-align: right;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  /* Disable text selection */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.jp-OutputArea-prompt {
  display: table-cell;
  vertical-align: top;
}

.jp-OutputArea-output {
  display: table-cell;
  width: 100%;
  height: auto;
  overflow: auto;
  user-select: text;
  -moz-user-select: text;
  -webkit-user-select: text;
  -ms-user-select: text;
}

.jp-OutputArea .jp-RenderedText {
  padding-left: 1ch;
}

/**
 * Prompt overlay.
 */

.jp-OutputArea-promptOverlay {
  position: absolute;
  top: 0;
  width: var(--jp-cell-prompt-width);
  height: 100%;
  opacity: 0.5;
}

.jp-OutputArea-promptOverlay:hover {
  background: var(--jp-layout-color2);
  box-shadow: inset 0 0 1px var(--jp-inverse-layout-color0);
  cursor: zoom-out;
}

.jp-mod-outputsScrolled .jp-OutputArea-promptOverlay:hover {
  cursor: zoom-in;
}

/**
 * Isolated output.
 */
.jp-OutputArea-output.jp-mod-isolated {
  width: 100%;
  display: block;
}

/*
When drag events occur, `lm-mod-override-cursor` is added to the body.
Because iframes steal all cursor events, the following two rules are necessary
to suppress pointer events while resize drags are occurring. There may be a
better solution to this problem.
*/
body.lm-mod-override-cursor .jp-OutputArea-output.jp-mod-isolated {
  position: relative;
}

body.lm-mod-override-cursor .jp-OutputArea-output.jp-mod-isolated::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
}

/* pre */

.jp-OutputArea-output pre {
  border: none;
  margin: 0;
  padding: 0;
  overflow-x: auto;
  overflow-y: auto;
  word-break: break-all;
  word-wrap: break-word;
  white-space: pre-wrap;
}

/* tables */

.jp-OutputArea-output.jp-RenderedHTMLCommon table {
  margin-left: 0;
  margin-right: 0;
}

/* description lists */

.jp-OutputArea-output dl,
.jp-OutputArea-output dt,
.jp-OutputArea-output dd {
  display: block;
}

.jp-OutputArea-output dl {
  width: 100%;
  overflow: hidden;
  padding: 0;
  margin: 0;
}

.jp-OutputArea-output dt {
  font-weight: bold;
  float: left;
  width: 20%;
  padding: 0;
  margin: 0;
}

.jp-OutputArea-output dd {
  float: left;
  width: 80%;
  padding: 0;
  margin: 0;
}

.jp-TrimmedOutputs pre {
  background: var(--jp-layout-color3);
  font-size: calc(var(--jp-code-font-size) * 1.4);
  text-align: center;
  text-transform: uppercase;
}

/* Hide the gutter in case of
 *  - nested output areas (e.g. in the case of output widgets)
 *  - mirrored output areas
 */
.jp-OutputArea .jp-OutputArea .jp-OutputArea-prompt {
  display: none;
}

/* Hide empty lines in the output area, for instance due to cleared widgets */
.jp-OutputArea-prompt:empty {
  padding: 0;
  border: 0;
}

/*-----------------------------------------------------------------------------
| executeResult is added to any Output-result for the display of the object
| returned by a cell
|----------------------------------------------------------------------------*/

.jp-OutputArea-output.jp-OutputArea-executeResult {
  margin-left: 0;
  width: 100%;
}

/* Text output with the Out[] prompt needs a top padding to match the
 * alignment of the Out[] prompt itself.
 */
.jp-OutputArea-executeResult .jp-RenderedText.jp-OutputArea-output {
  padding-top: var(--jp-code-padding);
  border-top: var(--jp-border-width) solid transparent;
}

/*-----------------------------------------------------------------------------
| The Stdin output
|----------------------------------------------------------------------------*/

.jp-Stdin-prompt {
  color: var(--jp-content-font-color0);
  padding-right: var(--jp-code-padding);
  vertical-align: baseline;
  flex: 0 0 auto;
}

.jp-Stdin-input {
  font-family: var(--jp-code-font-family);
  font-size: inherit;
  color: inherit;
  background-color: inherit;
  width: 42%;
  min-width: 200px;

  /* make sure input baseline aligns with prompt */
  vertical-align: baseline;

  /* padding + margin = 0.5em between prompt and cursor */
  padding: 0 0.25em;
  margin: 0 0.25em;
  flex: 0 0 70%;
}

.jp-Stdin-input::placeholder {
  opacity: 0;
}

.jp-Stdin-input:focus {
  box-shadow: none;
}

.jp-Stdin-input:focus::placeholder {
  opacity: 1;
}

/*-----------------------------------------------------------------------------
| Output Area View
|----------------------------------------------------------------------------*/

.jp-LinkedOutputView .jp-OutputArea {
  height: 100%;
  display: block;
}

.jp-LinkedOutputView .jp-OutputArea-output:only-child {
  height: 100%;
}

/*-----------------------------------------------------------------------------
| Printing
|----------------------------------------------------------------------------*/

@media print {
  .jp-OutputArea-child {
    break-inside: avoid-page;
  }
}

/*-----------------------------------------------------------------------------
| Mobile
|----------------------------------------------------------------------------*/
@media only screen and (max-width: 760px) {
  .jp-OutputPrompt {
    display: table-row;
    text-align: left;
  }

  .jp-OutputArea-child .jp-OutputArea-output {
    display: table-row;
    margin-left: var(--jp-notebook-padding);
  }
}

/* Trimmed outputs warning */
.jp-TrimmedOutputs > a {
  margin: 10px;
  text-decoration: none;
  cursor: pointer;
}

.jp-TrimmedOutputs > a:hover {
  text-decoration: none;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Table of Contents
|----------------------------------------------------------------------------*/

:root {
  --jp-private-toc-active-width: 4px;
}

.jp-TableOfContents {
  display: flex;
  flex-direction: column;
  background: var(--jp-layout-color1);
  color: var(--jp-ui-font-color1);
  font-size: var(--jp-ui-font-size1);
  height: 100%;
}

.jp-TableOfContents-placeholder {
  text-align: center;
}

.jp-TableOfContents-placeholderContent {
  color: var(--jp-content-font-color2);
  padding: 8px;
}

.jp-TableOfContents-placeholderContent > h3 {
  margin-bottom: var(--jp-content-heading-margin-bottom);
}

.jp-TableOfContents .jp-SidePanel-content {
  overflow-y: auto;
}

.jp-TableOfContents-tree {
  margin: 4px;
}

.jp-TableOfContents ol {
  list-style-type: none;
}

/* stylelint-disable-next-line selector-max-type */
.jp-TableOfContents li > ol {
  /* Align left border with triangle icon center */
  padding-left: 11px;
}

.jp-TableOfContents-content {
  /* left margin for the active heading indicator */
  margin: 0 0 0 var(--jp-private-toc-active-width);
  padding: 0;
  background-color: var(--jp-layout-color1);
}

.jp-tocItem {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.jp-tocItem-heading {
  display: flex;
  cursor: pointer;
}

.jp-tocItem-heading:hover {
  background-color: var(--jp-layout-color2);
}

.jp-tocItem-content {
  display: block;
  padding: 4px 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow-x: hidden;
}

.jp-tocItem-collapser {
  height: 20px;
  margin: 2px 2px 0;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
}

.jp-tocItem-collapser:hover {
  background-color: var(--jp-layout-color3);
}

/* Active heading indicator */

.jp-tocItem-heading::before {
  content: ' ';
  background: transparent;
  width: var(--jp-private-toc-active-width);
  height: 24px;
  position: absolute;
  left: 0;
  border-radius: var(--jp-border-radius);
}

.jp-tocItem-heading.jp-tocItem-active::before {
  background-color: var(--jp-brand-color1);
}

.jp-tocItem-heading:hover.jp-tocItem-active::before {
  background: var(--jp-brand-color0);
  opacity: 1;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-Collapser {
  flex: 0 0 var(--jp-cell-collapser-width);
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  background: transparent;
  border-radius: var(--jp-border-radius);
  opacity: 1;
}

.jp-Collapser-child {
  display: block;
  width: 100%;
  box-sizing: border-box;

  /* height: 100% doesn't work because the height of its parent is computed from content */
  position: absolute;
  top: 0;
  bottom: 0;
}

/*-----------------------------------------------------------------------------
| Printing
|----------------------------------------------------------------------------*/

/*
Hiding collapsers in print mode.

Note: input and output wrappers have "display: block" propery in print mode.
*/

@media print {
  .jp-Collapser {
    display: none;
  }
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Header/Footer
|----------------------------------------------------------------------------*/

/* Hidden by zero height by default */
.jp-CellHeader,
.jp-CellFooter {
  height: 0;
  width: 100%;
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  background: transparent;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Input
|----------------------------------------------------------------------------*/

/* All input areas */
.jp-InputArea {
  display: table;
  table-layout: fixed;
  width: 100%;
  overflow: hidden;
}

.jp-InputArea-editor {
  display: table-cell;
  overflow: hidden;
  vertical-align: top;

  /* This is the non-active, default styling */
  border: var(--jp-border-width) solid var(--jp-cell-editor-border-color);
  border-radius: 0;
  background: var(--jp-cell-editor-background);
}

.jp-InputPrompt {
  display: table-cell;
  vertical-align: top;
  width: var(--jp-cell-prompt-width);
  color: var(--jp-cell-inprompt-font-color);
  font-family: var(--jp-cell-prompt-font-family);
  padding: var(--jp-code-padding);
  letter-spacing: var(--jp-cell-prompt-letter-spacing);
  opacity: var(--jp-cell-prompt-opacity);
  line-height: var(--jp-code-line-height);
  font-size: var(--jp-code-font-size);
  border: var(--jp-border-width) solid transparent;

  /* Right align prompt text, don't wrap to handle large prompt numbers */
  text-align: right;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  /* Disable text selection */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/*-----------------------------------------------------------------------------
| Mobile
|----------------------------------------------------------------------------*/
@media only screen and (max-width: 760px) {
  .jp-InputArea-editor {
    display: table-row;
    margin-left: var(--jp-notebook-padding);
  }

  .jp-InputPrompt {
    display: table-row;
    text-align: left;
  }
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Placeholder
|----------------------------------------------------------------------------*/

.jp-Placeholder {
  display: table;
  table-layout: fixed;
  width: 100%;
}

.jp-Placeholder-prompt {
  display: table-cell;
  box-sizing: border-box;
}

.jp-Placeholder-content {
  display: table-cell;
  padding: 4px 6px;
  border: 1px solid transparent;
  border-radius: 0;
  background: none;
  box-sizing: border-box;
  cursor: pointer;
}

.jp-Placeholder-contentContainer {
  display: flex;
}

.jp-Placeholder-content:hover,
.jp-InputPlaceholder > .jp-Placeholder-content:hover {
  border-color: var(--jp-layout-color3);
}

.jp-Placeholder-content .jp-MoreHorizIcon {
  width: 32px;
  height: 16px;
  border: 1px solid transparent;
  border-radius: var(--jp-border-radius);
}

.jp-Placeholder-content .jp-MoreHorizIcon:hover {
  border: 1px solid var(--jp-border-color1);
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.25);
  background-color: var(--jp-layout-color0);
}

.jp-PlaceholderText {
  white-space: nowrap;
  overflow-x: hidden;
  color: var(--jp-inverse-layout-color3);
  font-family: var(--jp-code-font-family);
}

.jp-InputPlaceholder > .jp-Placeholder-content {
  border-color: var(--jp-cell-editor-border-color);
  background: var(--jp-cell-editor-background);
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Private CSS variables
|----------------------------------------------------------------------------*/

:root {
  --jp-private-cell-scrolling-output-offset: 5px;
}

/*-----------------------------------------------------------------------------
| Cell
|----------------------------------------------------------------------------*/

.jp-Cell {
  padding: var(--jp-cell-padding);
  margin: 0;
  border: none;
  outline: none;
  background: transparent;
}

/*-----------------------------------------------------------------------------
| Common input/output
|----------------------------------------------------------------------------*/

.jp-Cell-inputWrapper,
.jp-Cell-outputWrapper {
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;

  /* Added to reveal the box-shadow on the input and output collapsers. */
  overflow: visible;
}

/* Only input/output areas inside cells */
.jp-Cell-inputArea,
.jp-Cell-outputArea {
  flex: 1 1 auto;
}

/*-----------------------------------------------------------------------------
| Collapser
|----------------------------------------------------------------------------*/

/* Make the output collapser disappear when there is not output, but do so
 * in a manner that leaves it in the layout and preserves its width.
 */
.jp-Cell.jp-mod-noOutputs .jp-Cell-outputCollapser {
  border: none !important;
  background: transparent !important;
}

.jp-Cell:not(.jp-mod-noOutputs) .jp-Cell-outputCollapser {
  min-height: var(--jp-cell-collapser-min-height);
}

/*-----------------------------------------------------------------------------
| Output
|----------------------------------------------------------------------------*/

/* Put a space between input and output when there IS output */
.jp-Cell:not(.jp-mod-noOutputs) .jp-Cell-outputWrapper {
  margin-top: 5px;
}

.jp-CodeCell.jp-mod-outputsScrolled .jp-Cell-outputArea {
  overflow-y: auto;
  max-height: 24em;
  margin-left: var(--jp-private-cell-scrolling-output-offset);
  resize: vertical;
}

.jp-CodeCell.jp-mod-outputsScrolled .jp-Cell-outputArea[style*='height'] {
  max-height: unset;
}

.jp-CodeCell.jp-mod-outputsScrolled .jp-Cell-outputArea::after {
  content: ' ';
  box-shadow: inset 0 0 6px 2px rgb(0 0 0 / 30%);
  width: 100%;
  height: 100%;
  position: sticky;
  bottom: 0;
  top: 0;
  margin-top: -50%;
  float: left;
  display: block;
  pointer-events: none;
}

.jp-CodeCell.jp-mod-outputsScrolled .jp-OutputArea-child {
  padding-top: 6px;
}

.jp-CodeCell.jp-mod-outputsScrolled .jp-OutputArea-prompt {
  width: calc(
    var(--jp-cell-prompt-width) - var(--jp-private-cell-scrolling-output-offset)
  );
}

.jp-CodeCell.jp-mod-outputsScrolled .jp-OutputArea-promptOverlay {
  left: calc(-1 * var(--jp-private-cell-scrolling-output-offset));
}

/*-----------------------------------------------------------------------------
| CodeCell
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| MarkdownCell
|----------------------------------------------------------------------------*/

.jp-MarkdownOutput {
  display: table-cell;
  width: 100%;
  margin-top: 0;
  margin-bottom: 0;
  padding-left: var(--jp-code-padding);
}

.jp-MarkdownOutput.jp-RenderedHTMLCommon {
  overflow: auto;
}

/* collapseHeadingButton (show always if hiddenCellsButton is _not_ shown) */
.jp-collapseHeadingButton {
  display: flex;
  min-height: var(--jp-cell-collapser-min-height);
  font-size: var(--jp-code-font-size);
  position: absolute;
  background-color: transparent;
  background-size: 25px;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: top;
  background-image: var(--jp-icon-caret-down);
  right: 0;
  top: 0;
  bottom: 0;
}

.jp-collapseHeadingButton.jp-mod-collapsed {
  background-image: var(--jp-icon-caret-right);
}

/*
 set the container font size to match that of content
 so that the nested collapse buttons have the right size
*/
.jp-MarkdownCell .jp-InputPrompt {
  font-size: var(--jp-content-font-size1);
}

/*
  Align collapseHeadingButton with cell top header
  The font sizes are identical to the ones in packages/rendermime/style/base.css
*/
.jp-mod-rendered .jp-collapseHeadingButton[data-heading-level='1'] {
  font-size: var(--jp-content-font-size5);
  background-position-y: calc(0.3 * var(--jp-content-font-size5));
}

.jp-mod-rendered .jp-collapseHeadingButton[data-heading-level='2'] {
  font-size: var(--jp-content-font-size4);
  background-position-y: calc(0.3 * var(--jp-content-font-size4));
}

.jp-mod-rendered .jp-collapseHeadingButton[data-heading-level='3'] {
  font-size: var(--jp-content-font-size3);
  background-position-y: calc(0.3 * var(--jp-content-font-size3));
}

.jp-mod-rendered .jp-collapseHeadingButton[data-heading-level='4'] {
  font-size: var(--jp-content-font-size2);
  background-position-y: calc(0.3 * var(--jp-content-font-size2));
}

.jp-mod-rendered .jp-collapseHeadingButton[data-heading-level='5'] {
  font-size: var(--jp-content-font-size1);
  background-position-y: top;
}

.jp-mod-rendered .jp-collapseHeadingButton[data-heading-level='6'] {
  font-size: var(--jp-content-font-size0);
  background-position-y: top;
}

/* collapseHeadingButton (show only on (hover,active) if hiddenCellsButton is shown) */
.jp-Notebook.jp-mod-showHiddenCellsButton .jp-collapseHeadingButton {
  display: none;
}

.jp-Notebook.jp-mod-showHiddenCellsButton
  :is(.jp-MarkdownCell:hover, .jp-mod-active)
  .jp-collapseHeadingButton {
  display: flex;
}

/* showHiddenCellsButton (only show if jp-mod-showHiddenCellsButton is set, which
is a consequence of the showHiddenCellsButton option in Notebook Settings)*/
.jp-Notebook.jp-mod-showHiddenCellsButton .jp-showHiddenCellsButton {
  margin-left: calc(var(--jp-cell-prompt-width) + 2 * var(--jp-code-padding));
  margin-top: var(--jp-code-padding);
  border: 1px solid var(--jp-border-color2);
  background-color: var(--jp-border-color3) !important;
  color: var(--jp-content-font-color0) !important;
  display: flex;
}

.jp-Notebook.jp-mod-showHiddenCellsButton .jp-showHiddenCellsButton:hover {
  background-color: var(--jp-border-color2) !important;
}

.jp-showHiddenCellsButton {
  display: none;
}

/*-----------------------------------------------------------------------------
| Printing
|----------------------------------------------------------------------------*/

/*
Using block instead of flex to allow the use of the break-inside CSS property for
cell outputs.
*/

@media print {
  .jp-Cell-inputWrapper,
  .jp-Cell-outputWrapper {
    display: block;
  }
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Variables
|----------------------------------------------------------------------------*/

:root {
  --jp-notebook-toolbar-padding: 2px 5px 2px 2px;
}

/*-----------------------------------------------------------------------------

/*-----------------------------------------------------------------------------
| Styles
|----------------------------------------------------------------------------*/

.jp-NotebookPanel-toolbar {
  padding: var(--jp-notebook-toolbar-padding);

  /* disable paint containment from lumino 2.0 default strict CSS containment */
  contain: style size !important;
}

.jp-Toolbar-item.jp-Notebook-toolbarCellType .jp-select-wrapper.jp-mod-focused {
  border: none;
  box-shadow: none;
}

.jp-Notebook-toolbarCellTypeDropdown select {
  height: 24px;
  font-size: var(--jp-ui-font-size1);
  line-height: 14px;
  border-radius: 0;
  display: block;
}

.jp-Notebook-toolbarCellTypeDropdown span {
  top: 5px !important;
}

.jp-Toolbar-responsive-popup {
  position: absolute;
  height: fit-content;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  border-bottom: var(--jp-border-width) solid var(--jp-toolbar-border-color);
  box-shadow: var(--jp-toolbar-box-shadow);
  background: var(--jp-toolbar-background);
  min-height: var(--jp-toolbar-micro-height);
  padding: var(--jp-notebook-toolbar-padding);
  z-index: 1;
  right: 0;
  top: 0;
}

.jp-Toolbar > .jp-Toolbar-responsive-opener {
  margin-left: auto;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Variables
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------

/*-----------------------------------------------------------------------------
| Styles
|----------------------------------------------------------------------------*/

.jp-Notebook-ExecutionIndicator {
  position: relative;
  display: inline-block;
  height: 100%;
  z-index: 9997;
}

.jp-Notebook-ExecutionIndicator-tooltip {
  visibility: hidden;
  height: auto;
  width: max-content;
  width: -moz-max-content;
  background-color: var(--jp-layout-color2);
  color: var(--jp-ui-font-color1);
  text-align: justify;
  border-radius: 6px;
  padding: 0 5px;
  position: fixed;
  display: table;
}

.jp-Notebook-ExecutionIndicator-tooltip.up {
  transform: translateX(-50%) translateY(-100%) translateY(-32px);
}

.jp-Notebook-ExecutionIndicator-tooltip.down {
  transform: translateX(calc(-100% + 16px)) translateY(5px);
}

.jp-Notebook-ExecutionIndicator-tooltip.hidden {
  display: none;
}

.jp-Notebook-ExecutionIndicator:hover .jp-Notebook-ExecutionIndicator-tooltip {
  visibility: visible;
}

.jp-Notebook-ExecutionIndicator span {
  font-size: var(--jp-ui-font-size1);
  font-family: var(--jp-ui-font-family);
  color: var(--jp-ui-font-color1);
  line-height: 24px;
  display: block;
}

.jp-Notebook-ExecutionIndicator-progress-bar {
  display: flex;
  justify-content: center;
  height: 100%;
}

/*
 * Copyright (c) Jupyter Development Team.
 * Distributed under the terms of the Modified BSD License.
 */

/*
 * Execution indicator
 */
.jp-tocItem-content::after {
  content: '';

  /* Must be identical to form a circle */
  width: 12px;
  height: 12px;
  background: none;
  border: none;
  position: absolute;
  right: 0;
}

.jp-tocItem-content[data-running='0']::after {
  border-radius: 50%;
  border: var(--jp-border-width) solid var(--jp-inverse-layout-color3);
  background: none;
}

.jp-tocItem-content[data-running='1']::after {
  border-radius: 50%;
  border: var(--jp-border-width) solid var(--jp-inverse-layout-color3);
  background-color: var(--jp-inverse-layout-color3);
}

.jp-tocItem-content[data-running='0'],
.jp-tocItem-content[data-running='1'] {
  margin-right: 12px;
}

/*
 * Copyright (c) Jupyter Development Team.
 * Distributed under the terms of the Modified BSD License.
 */

.jp-Notebook-footer {
  height: 27px;
  margin-left: calc(
    var(--jp-cell-prompt-width) + var(--jp-cell-collapser-width) +
      var(--jp-cell-padding)
  );
  width: calc(
    100% -
      (
        var(--jp-cell-prompt-width) + var(--jp-cell-collapser-width) +
          var(--jp-cell-padding) + var(--jp-cell-padding)
      )
  );
  border: var(--jp-border-width) solid var(--jp-cell-editor-border-color);
  color: var(--jp-ui-font-color3);
  margin-top: 6px;
  background: none;
  cursor: pointer;
}

.jp-Notebook-footer:focus {
  border-color: var(--jp-cell-editor-active-border-color);
}

/* For devices that support hovering, hide footer until hover */
@media (hover: hover) {
  .jp-Notebook-footer {
    opacity: 0;
  }

  .jp-Notebook-footer:focus,
  .jp-Notebook-footer:hover {
    opacity: 1;
  }
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Imports
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| CSS variables
|----------------------------------------------------------------------------*/

:root {
  --jp-side-by-side-output-size: 1fr;
  --jp-side-by-side-resized-cell: var(--jp-side-by-side-output-size);
  --jp-private-notebook-dragImage-width: 304px;
  --jp-private-notebook-dragImage-height: 36px;
  --jp-private-notebook-selected-color: var(--md-blue-400);
  --jp-private-notebook-active-color: var(--md-green-400);
}

/*-----------------------------------------------------------------------------
| Notebook
|----------------------------------------------------------------------------*/

/* stylelint-disable selector-max-class */

.jp-NotebookPanel {
  display: block;
  height: 100%;
}

.jp-NotebookPanel.jp-Document {
  min-width: 240px;
  min-height: 120px;
}

.jp-Notebook {
  padding: var(--jp-notebook-padding);
  outline: none;
  overflow: auto;
  background: var(--jp-layout-color0);
}

.jp-Notebook.jp-mod-scrollPastEnd::after {
  display: block;
  content: '';
  min-height: var(--jp-notebook-scroll-padding);
}

.jp-MainAreaWidget-ContainStrict .jp-Notebook * {
  contain: strict;
}

.jp-Notebook .jp-Cell {
  overflow: visible;
}

.jp-Notebook .jp-Cell .jp-InputPrompt {
  cursor: move;
}

/*-----------------------------------------------------------------------------
| Notebook state related styling
|
| The notebook and cells each have states, here are the possibilities:
|
| - Notebook
|   - Command
|   - Edit
| - Cell
|   - None
|   - Active (only one can be active)
|   - Selected (the cells actions are applied to)
|   - Multiselected (when multiple selected, the cursor)
|   - No outputs
|----------------------------------------------------------------------------*/

/* Command or edit modes */

.jp-Notebook .jp-Cell:not(.jp-mod-active) .jp-InputPrompt {
  opacity: var(--jp-cell-prompt-not-active-opacity);
  color: var(--jp-cell-prompt-not-active-font-color);
}

.jp-Notebook .jp-Cell:not(.jp-mod-active) .jp-OutputPrompt {
  opacity: var(--jp-cell-prompt-not-active-opacity);
  color: var(--jp-cell-prompt-not-active-font-color);
}

/* cell is active */
.jp-Notebook .jp-Cell.jp-mod-active .jp-Collapser {
  background: var(--jp-brand-color1);
}

/* cell is dirty */
.jp-Notebook .jp-Cell.jp-mod-dirty .jp-InputPrompt {
  color: var(--jp-warn-color1);
}

.jp-Notebook .jp-Cell.jp-mod-dirty .jp-InputPrompt::before {
  color: var(--jp-warn-color1);
  content: '•';
}

.jp-Notebook .jp-Cell.jp-mod-active.jp-mod-dirty .jp-Collapser {
  background: var(--jp-warn-color1);
}

/* collapser is hovered */
.jp-Notebook .jp-Cell .jp-Collapser:hover {
  box-shadow: var(--jp-elevation-z2);
  background: var(--jp-brand-color1);
  opacity: var(--jp-cell-collapser-not-active-hover-opacity);
}

/* cell is active and collapser is hovered */
.jp-Notebook .jp-Cell.jp-mod-active .jp-Collapser:hover {
  background: var(--jp-brand-color0);
  opacity: 1;
}

/* Command mode */

.jp-Notebook.jp-mod-commandMode .jp-Cell.jp-mod-selected {
  background: var(--jp-notebook-multiselected-color);
}

.jp-Notebook.jp-mod-commandMode
  .jp-Cell.jp-mod-active.jp-mod-selected:not(.jp-mod-multiSelected) {
  background: transparent;
}

/* Edit mode */

.jp-Notebook.jp-mod-editMode .jp-Cell.jp-mod-active .jp-InputArea-editor {
  border: var(--jp-border-width) solid var(--jp-cell-editor-active-border-color);
  box-shadow: var(--jp-input-box-shadow);
  background-color: var(--jp-cell-editor-active-background);
}

/*-----------------------------------------------------------------------------
| Notebook drag and drop
|----------------------------------------------------------------------------*/

.jp-Notebook-cell.jp-mod-dropSource {
  opacity: 0.5;
}

.jp-Notebook-cell.jp-mod-dropTarget,
.jp-Notebook.jp-mod-commandMode
  .jp-Notebook-cell.jp-mod-active.jp-mod-selected.jp-mod-dropTarget {
  border-top-color: var(--jp-private-notebook-selected-color);
  border-top-style: solid;
  border-top-width: 2px;
}

.jp-dragImage {
  display: block;
  flex-direction: row;
  width: var(--jp-private-notebook-dragImage-width);
  height: var(--jp-private-notebook-dragImage-height);
  border: var(--jp-border-width) solid var(--jp-cell-editor-border-color);
  background: var(--jp-cell-editor-background);
  overflow: visible;
}

.jp-dragImage-singlePrompt {
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.12);
}

.jp-dragImage .jp-dragImage-content {
  flex: 1 1 auto;
  z-index: 2;
  font-size: var(--jp-code-font-size);
  font-family: var(--jp-code-font-family);
  line-height: var(--jp-code-line-height);
  padding: var(--jp-code-padding);
  border: var(--jp-border-width) solid var(--jp-cell-editor-border-color);
  background: var(--jp-cell-editor-background-color);
  color: var(--jp-content-font-color3);
  text-align: left;
  margin: 4px 4px 4px 0;
}

.jp-dragImage .jp-dragImage-prompt {
  flex: 0 0 auto;
  min-width: 36px;
  color: var(--jp-cell-inprompt-font-color);
  padding: var(--jp-code-padding);
  padding-left: 12px;
  font-family: var(--jp-cell-prompt-font-family);
  letter-spacing: var(--jp-cell-prompt-letter-spacing);
  line-height: 1.9;
  font-size: var(--jp-code-font-size);
  border: var(--jp-border-width) solid transparent;
}

.jp-dragImage-multipleBack {
  z-index: -1;
  position: absolute;
  height: 32px;
  width: 300px;
  top: 8px;
  left: 8px;
  background: var(--jp-layout-color2);
  border: var(--jp-border-width) solid var(--jp-input-border-color);
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.12);
}

/*-----------------------------------------------------------------------------
| Cell toolbar
|----------------------------------------------------------------------------*/

.jp-NotebookTools {
  display: block;
  min-width: var(--jp-sidebar-min-width);
  color: var(--jp-ui-font-color1);
  background: var(--jp-layout-color1);

  /* This is needed so that all font sizing of children done in ems is
    * relative to this base size */
  font-size: var(--jp-ui-font-size1);
  overflow: auto;
}

.jp-ActiveCellTool {
  padding: 12px 0;
  display: flex;
}

.jp-ActiveCellTool-Content {
  flex: 1 1 auto;
}

.jp-ActiveCellTool .jp-ActiveCellTool-CellContent {
  background: var(--jp-cell-editor-background);
  border: var(--jp-border-width) solid var(--jp-cell-editor-border-color);
  border-radius: 0;
  min-height: 29px;
}

.jp-ActiveCellTool .jp-InputPrompt {
  min-width: calc(var(--jp-cell-prompt-width) * 0.75);
}

.jp-ActiveCellTool-CellContent > pre {
  padding: 5px 4px;
  margin: 0;
  white-space: normal;
}

.jp-MetadataEditorTool {
  flex-direction: column;
  padding: 12px 0;
}

.jp-RankedPanel > :not(:first-child) {
  margin-top: 12px;
}

.jp-KeySelector select.jp-mod-styled {
  font-size: var(--jp-ui-font-size1);
  color: var(--jp-ui-font-color0);
  border: var(--jp-border-width) solid var(--jp-border-color1);
}

.jp-KeySelector label,
.jp-MetadataEditorTool label,
.jp-NumberSetter label {
  line-height: 1.4;
}

.jp-NotebookTools .jp-select-wrapper {
  margin-top: 4px;
  margin-bottom: 0;
}

.jp-NumberSetter input {
  width: 100%;
  margin-top: 4px;
}

.jp-NotebookTools .jp-Collapse {
  margin-top: 16px;
}

/*-----------------------------------------------------------------------------
| Presentation Mode (.jp-mod-presentationMode)
|----------------------------------------------------------------------------*/

.jp-mod-presentationMode .jp-Notebook {
  --jp-content-font-size1: var(--jp-content-presentation-font-size1);
  --jp-code-font-size: var(--jp-code-presentation-font-size);
}

.jp-mod-presentationMode .jp-Notebook .jp-Cell .jp-InputPrompt,
.jp-mod-presentationMode .jp-Notebook .jp-Cell .jp-OutputPrompt {
  flex: 0 0 110px;
}

/*-----------------------------------------------------------------------------
| Side-by-side Mode (.jp-mod-sideBySide)
|----------------------------------------------------------------------------*/
.jp-mod-sideBySide.jp-Notebook .jp-Notebook-cell {
  margin-top: 3em;
  margin-bottom: 3em;
  margin-left: 5%;
  margin-right: 5%;
}

.jp-mod-sideBySide.jp-Notebook .jp-CodeCell {
  display: grid;
  grid-template-columns: minmax(0, 1fr) min-content minmax(
      0,
      var(--jp-side-by-side-output-size)
    );
  grid-template-rows: auto minmax(0, 1fr) auto;
  grid-template-areas:
    'header header header'
    'input handle output'
    'footer footer footer';
}

.jp-mod-sideBySide.jp-Notebook .jp-CodeCell.jp-mod-resizedCell {
  grid-template-columns: minmax(0, 1fr) min-content minmax(
      0,
      var(--jp-side-by-side-resized-cell)
    );
}

.jp-mod-sideBySide.jp-Notebook .jp-CodeCell .jp-CellHeader {
  grid-area: header;
}

.jp-mod-sideBySide.jp-Notebook .jp-CodeCell .jp-Cell-inputWrapper {
  grid-area: input;
}

.jp-mod-sideBySide.jp-Notebook .jp-CodeCell .jp-Cell-outputWrapper {
  /* overwrite the default margin (no vertical separation needed in side by side move */
  margin-top: 0;
  grid-area: output;
}

.jp-mod-sideBySide.jp-Notebook .jp-CodeCell .jp-CellFooter {
  grid-area: footer;
}

.jp-mod-sideBySide.jp-Notebook .jp-CodeCell .jp-CellResizeHandle {
  grid-area: handle;
  user-select: none;
  display: block;
  height: 100%;
  cursor: ew-resize;
  padding: 0 var(--jp-cell-padding);
}

.jp-mod-sideBySide.jp-Notebook .jp-CodeCell .jp-CellResizeHandle::after {
  content: '';
  display: block;
  background: var(--jp-border-color2);
  height: 100%;
  width: 5px;
}

.jp-mod-sideBySide.jp-Notebook
  .jp-CodeCell.jp-mod-resizedCell
  .jp-CellResizeHandle::after {
  background: var(--jp-border-color0);
}

.jp-CellResizeHandle {
  display: none;
}

/*-----------------------------------------------------------------------------
| Placeholder
|----------------------------------------------------------------------------*/

.jp-Cell-Placeholder {
  padding-left: 55px;
}

.jp-Cell-Placeholder-wrapper {
  background: #fff;
  border: 1px solid;
  border-color: #e5e6e9 #dfe0e4 #d0d1d5;
  border-radius: 4px;
  -webkit-border-radius: 4px;
  margin: 10px 15px;
}

.jp-Cell-Placeholder-wrapper-inner {
  padding: 15px;
  position: relative;
}

.jp-Cell-Placeholder-wrapper-body {
  background-repeat: repeat;
  background-size: 50% auto;
}

.jp-Cell-Placeholder-wrapper-body div {
  background: #f6f7f8;
  background-image: -webkit-linear-gradient(
    left,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-repeat: no-repeat;
  background-size: 800px 104px;
  height: 104px;
  position: absolute;
  right: 15px;
  left: 15px;
  top: 15px;
}

div.jp-Cell-Placeholder-h1 {
  top: 20px;
  height: 20px;
  left: 15px;
  width: 150px;
}

div.jp-Cell-Placeholder-h2 {
  left: 15px;
  top: 50px;
  height: 10px;
  width: 100px;
}

div.jp-Cell-Placeholder-content-1,
div.jp-Cell-Placeholder-content-2,
div.jp-Cell-Placeholder-content-3 {
  left: 15px;
  right: 15px;
  height: 10px;
}

div.jp-Cell-Placeholder-content-1 {
  top: 100px;
}

div.jp-Cell-Placeholder-content-2 {
  top: 120px;
}

div.jp-Cell-Placeholder-content-3 {
  top: 140px;
}

</style>
<style type="text/css">
/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*
The following CSS variables define the main, public API for styling JupyterLab.
These variables should be used by all plugins wherever possible. In other
words, plugins should not define custom colors, sizes, etc unless absolutely
necessary. This enables users to change the visual theme of JupyterLab
by changing these variables.

Many variables appear in an ordered sequence (0,1,2,3). These sequences
are designed to work well together, so for example, `--jp-border-color1` should
be used with `--jp-layout-color1`. The numbers have the following meanings:

* 0: super-primary, reserved for special emphasis
* 1: primary, most important under normal situations
* 2: secondary, next most important under normal situations
* 3: tertiary, next most important under normal situations

Throughout JupyterLab, we are mostly following principles from Google's
Material Design when selecting colors. We are not, however, following
all of MD as it is not optimized for dense, information rich UIs.
*/

:root {
  /* Elevation
   *
   * We style box-shadows using Material Design's idea of elevation. These particular numbers are taken from here:
   *
   * https://github.com/material-components/material-components-web
   * https://material-components-web.appspot.com/elevation.html
   */

  --jp-shadow-base-lightness: 0;
  --jp-shadow-umbra-color: rgba(
    var(--jp-shadow-base-lightness),
    var(--jp-shadow-base-lightness),
    var(--jp-shadow-base-lightness),
    0.2
  );
  --jp-shadow-penumbra-color: rgba(
    var(--jp-shadow-base-lightness),
    var(--jp-shadow-base-lightness),
    var(--jp-shadow-base-lightness),
    0.14
  );
  --jp-shadow-ambient-color: rgba(
    var(--jp-shadow-base-lightness),
    var(--jp-shadow-base-lightness),
    var(--jp-shadow-base-lightness),
    0.12
  );
  --jp-elevation-z0: none;
  --jp-elevation-z1: 0 2px 1px -1px var(--jp-shadow-umbra-color),
    0 1px 1px 0 var(--jp-shadow-penumbra-color),
    0 1px 3px 0 var(--jp-shadow-ambient-color);
  --jp-elevation-z2: 0 3px 1px -2px var(--jp-shadow-umbra-color),
    0 2px 2px 0 var(--jp-shadow-penumbra-color),
    0 1px 5px 0 var(--jp-shadow-ambient-color);
  --jp-elevation-z4: 0 2px 4px -1px var(--jp-shadow-umbra-color),
    0 4px 5px 0 var(--jp-shadow-penumbra-color),
    0 1px 10px 0 var(--jp-shadow-ambient-color);
  --jp-elevation-z6: 0 3px 5px -1px var(--jp-shadow-umbra-color),
    0 6px 10px 0 var(--jp-shadow-penumbra-color),
    0 1px 18px 0 var(--jp-shadow-ambient-color);
  --jp-elevation-z8: 0 5px 5px -3px var(--jp-shadow-umbra-color),
    0 8px 10px 1px var(--jp-shadow-penumbra-color),
    0 3px 14px 2px var(--jp-shadow-ambient-color);
  --jp-elevation-z12: 0 7px 8px -4px var(--jp-shadow-umbra-color),
    0 12px 17px 2px var(--jp-shadow-penumbra-color),
    0 5px 22px 4px var(--jp-shadow-ambient-color);
  --jp-elevation-z16: 0 8px 10px -5px var(--jp-shadow-umbra-color),
    0 16px 24px 2px var(--jp-shadow-penumbra-color),
    0 6px 30px 5px var(--jp-shadow-ambient-color);
  --jp-elevation-z20: 0 10px 13px -6px var(--jp-shadow-umbra-color),
    0 20px 31px 3px var(--jp-shadow-penumbra-color),
    0 8px 38px 7px var(--jp-shadow-ambient-color);
  --jp-elevation-z24: 0 11px 15px -7px var(--jp-shadow-umbra-color),
    0 24px 38px 3px var(--jp-shadow-penumbra-color),
    0 9px 46px 8px var(--jp-shadow-ambient-color);

  /* Borders
   *
   * The following variables, specify the visual styling of borders in JupyterLab.
   */

  --jp-border-width: 1px;
  --jp-border-color0: var(--md-grey-400);
  --jp-border-color1: var(--md-grey-400);
  --jp-border-color2: var(--md-grey-300);
  --jp-border-color3: var(--md-grey-200);
  --jp-inverse-border-color: var(--md-grey-600);
  --jp-border-radius: 2px;

  /* UI Fonts
   *
   * The UI font CSS variables are used for the typography all of the JupyterLab
   * user interface elements that are not directly user generated content.
   *
   * The font sizing here is done assuming that the body font size of --jp-ui-font-size1
   * is applied to a parent element. When children elements, such as headings, are sized
   * in em all things will be computed relative to that body size.
   */

  --jp-ui-font-scale-factor: 1.2;
  --jp-ui-font-size0: 0.83333em;
  --jp-ui-font-size1: 13px; /* Base font size */
  --jp-ui-font-size2: 1.2em;
  --jp-ui-font-size3: 1.44em;
  --jp-ui-font-family: system-ui, -apple-system, blinkmacsystemfont, 'Segoe UI',
    helvetica, arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol';

  /*
   * Use these font colors against the corresponding main layout colors.
   * In a light theme, these go from dark to light.
   */

  /* Defaults use Material Design specification */
  --jp-ui-font-color0: rgba(0, 0, 0, 1);
  --jp-ui-font-color1: rgba(0, 0, 0, 0.87);
  --jp-ui-font-color2: rgba(0, 0, 0, 0.54);
  --jp-ui-font-color3: rgba(0, 0, 0, 0.38);

  /*
   * Use these against the brand/accent/warn/error colors.
   * These will typically go from light to darker, in both a dark and light theme.
   */

  --jp-ui-inverse-font-color0: rgba(255, 255, 255, 1);
  --jp-ui-inverse-font-color1: rgba(255, 255, 255, 1);
  --jp-ui-inverse-font-color2: rgba(255, 255, 255, 0.7);
  --jp-ui-inverse-font-color3: rgba(255, 255, 255, 0.5);

  /* Content Fonts
   *
   * Content font variables are used for typography of user generated content.
   *
   * The font sizing here is done assuming that the body font size of --jp-content-font-size1
   * is applied to a parent element. When children elements, such as headings, are sized
   * in em all things will be computed relative to that body size.
   */

  --jp-content-line-height: 1.6;
  --jp-content-font-scale-factor: 1.2;
  --jp-content-font-size0: 0.83333em;
  --jp-content-font-size1: 14px; /* Base font size */
  --jp-content-font-size2: 1.2em;
  --jp-content-font-size3: 1.44em;
  --jp-content-font-size4: 1.728em;
  --jp-content-font-size5: 2.0736em;

  /* This gives a magnification of about 125% in presentation mode over normal. */
  --jp-content-presentation-font-size1: 17px;
  --jp-content-heading-line-height: 1;
  --jp-content-heading-margin-top: 1.2em;
  --jp-content-heading-margin-bottom: 0.8em;
  --jp-content-heading-font-weight: 500;

  /* Defaults use Material Design specification */
  --jp-content-font-color0: rgba(0, 0, 0, 1);
  --jp-content-font-color1: rgba(0, 0, 0, 0.87);
  --jp-content-font-color2: rgba(0, 0, 0, 0.54);
  --jp-content-font-color3: rgba(0, 0, 0, 0.38);
  --jp-content-link-color: var(--md-blue-900);
  --jp-content-font-family: system-ui, -apple-system, blinkmacsystemfont,
    'Segoe UI', helvetica, arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol';

  /*
   * Code Fonts
   *
   * Code font variables are used for typography of code and other monospaces content.
   */

  --jp-code-font-size: 13px;
  --jp-code-line-height: 1.3077; /* 17px for 13px base */
  --jp-code-padding: 5px; /* 5px for 13px base, codemirror highlighting needs integer px value */
  --jp-code-font-family-default: menlo, consolas, 'DejaVu Sans Mono', monospace;
  --jp-code-font-family: var(--jp-code-font-family-default);

  /* This gives a magnification of about 125% in presentation mode over normal. */
  --jp-code-presentation-font-size: 16px;

  /* may need to tweak cursor width if you change font size */
  --jp-code-cursor-width0: 1.4px;
  --jp-code-cursor-width1: 2px;
  --jp-code-cursor-width2: 4px;

  /* Layout
   *
   * The following are the main layout colors use in JupyterLab. In a light
   * theme these would go from light to dark.
   */

  --jp-layout-color0: white;
  --jp-layout-color1: white;
  --jp-layout-color2: var(--md-grey-200);
  --jp-layout-color3: var(--md-grey-400);
  --jp-layout-color4: var(--md-grey-600);

  /* Inverse Layout
   *
   * The following are the inverse layout colors use in JupyterLab. In a light
   * theme these would go from dark to light.
   */

  --jp-inverse-layout-color0: #111;
  --jp-inverse-layout-color1: var(--md-grey-900);
  --jp-inverse-layout-color2: var(--md-grey-800);
  --jp-inverse-layout-color3: var(--md-grey-700);
  --jp-inverse-layout-color4: var(--md-grey-600);

  /* Brand/accent */

  --jp-brand-color0: var(--md-blue-900);
  --jp-brand-color1: var(--md-blue-700);
  --jp-brand-color2: var(--md-blue-300);
  --jp-brand-color3: var(--md-blue-100);
  --jp-brand-color4: var(--md-blue-50);
  --jp-accent-color0: var(--md-green-900);
  --jp-accent-color1: var(--md-green-700);
  --jp-accent-color2: var(--md-green-300);
  --jp-accent-color3: var(--md-green-100);

  /* State colors (warn, error, success, info) */

  --jp-warn-color0: var(--md-orange-900);
  --jp-warn-color1: var(--md-orange-700);
  --jp-warn-color2: var(--md-orange-300);
  --jp-warn-color3: var(--md-orange-100);
  --jp-error-color0: var(--md-red-900);
  --jp-error-color1: var(--md-red-700);
  --jp-error-color2: var(--md-red-300);
  --jp-error-color3: var(--md-red-100);
  --jp-success-color0: var(--md-green-900);
  --jp-success-color1: var(--md-green-700);
  --jp-success-color2: var(--md-green-300);
  --jp-success-color3: var(--md-green-100);
  --jp-info-color0: var(--md-cyan-900);
  --jp-info-color1: var(--md-cyan-700);
  --jp-info-color2: var(--md-cyan-300);
  --jp-info-color3: var(--md-cyan-100);

  /* Cell specific styles */

  --jp-cell-padding: 5px;
  --jp-cell-collapser-width: 8px;
  --jp-cell-collapser-min-height: 20px;
  --jp-cell-collapser-not-active-hover-opacity: 0.6;
  --jp-cell-editor-background: var(--md-grey-100);
  --jp-cell-editor-border-color: var(--md-grey-300);
  --jp-cell-editor-box-shadow: inset 0 0 2px var(--md-blue-300);
  --jp-cell-editor-active-background: var(--jp-layout-color0);
  --jp-cell-editor-active-border-color: var(--jp-brand-color1);
  --jp-cell-prompt-width: 64px;
  --jp-cell-prompt-font-family: var(--jp-code-font-family-default);
  --jp-cell-prompt-letter-spacing: 0;
  --jp-cell-prompt-opacity: 1;
  --jp-cell-prompt-not-active-opacity: 0.5;
  --jp-cell-prompt-not-active-font-color: var(--md-grey-700);

  /* A custom blend of MD grey and blue 600
   * See https://meyerweb.com/eric/tools/color-blend/#546E7A:1E88E5:5:hex */
  --jp-cell-inprompt-font-color: #307fc1;

  /* A custom blend of MD grey and orange 600
   * https://meyerweb.com/eric/tools/color-blend/#546E7A:F4511E:5:hex */
  --jp-cell-outprompt-font-color: #bf5b3d;

  /* Notebook specific styles */

  --jp-notebook-padding: 10px;
  --jp-notebook-select-background: var(--jp-layout-color1);
  --jp-notebook-multiselected-color: var(--md-blue-50);

  /* The scroll padding is calculated to fill enough space at the bottom of the
  notebook to show one single-line cell (with appropriate padding) at the top
  when the notebook is scrolled all the way to the bottom. We also subtract one
  pixel so that no scrollbar appears if we have just one single-line cell in the
  notebook. This padding is to enable a 'scroll past end' feature in a notebook.
  */
  --jp-notebook-scroll-padding: calc(
    100% - var(--jp-code-font-size) * var(--jp-code-line-height) -
      var(--jp-code-padding) - var(--jp-cell-padding) - 1px
  );

  /* Rendermime styles */

  --jp-rendermime-error-background: #fdd;
  --jp-rendermime-table-row-background: var(--md-grey-100);
  --jp-rendermime-table-row-hover-background: var(--md-light-blue-50);

  /* Dialog specific styles */

  --jp-dialog-background: rgba(0, 0, 0, 0.25);

  /* Console specific styles */

  --jp-console-padding: 10px;

  /* Toolbar specific styles */

  --jp-toolbar-border-color: var(--jp-border-color1);
  --jp-toolbar-micro-height: 8px;
  --jp-toolbar-background: var(--jp-layout-color1);
  --jp-toolbar-box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.24);
  --jp-toolbar-header-margin: 4px 4px 0 4px;
  --jp-toolbar-active-background: var(--md-grey-300);

  /* Statusbar specific styles */

  --jp-statusbar-height: 24px;

  /* Input field styles */

  --jp-input-box-shadow: inset 0 0 2px var(--md-blue-300);
  --jp-input-active-background: var(--jp-layout-color1);
  --jp-input-hover-background: var(--jp-layout-color1);
  --jp-input-background: var(--md-grey-100);
  --jp-input-border-color: var(--jp-inverse-border-color);
  --jp-input-active-border-color: var(--jp-brand-color1);
  --jp-input-active-box-shadow-color: rgba(19, 124, 189, 0.3);

  /* General editor styles */

  --jp-editor-selected-background: #d9d9d9;
  --jp-editor-selected-focused-background: #d7d4f0;
  --jp-editor-cursor-color: var(--jp-ui-font-color0);

  /* Code mirror specific styles */

  --jp-mirror-editor-keyword-color: #008000;
  --jp-mirror-editor-atom-color: #88f;
  --jp-mirror-editor-number-color: #080;
  --jp-mirror-editor-def-color: #00f;
  --jp-mirror-editor-variable-color: var(--md-grey-900);
  --jp-mirror-editor-variable-2-color: rgb(0, 54, 109);
  --jp-mirror-editor-variable-3-color: #085;
  --jp-mirror-editor-punctuation-color: #05a;
  --jp-mirror-editor-property-color: #05a;
  --jp-mirror-editor-operator-color: #a2f;
  --jp-mirror-editor-comment-color: #408080;
  --jp-mirror-editor-string-color: #ba2121;
  --jp-mirror-editor-string-2-color: #708;
  --jp-mirror-editor-meta-color: #a2f;
  --jp-mirror-editor-qualifier-color: #555;
  --jp-mirror-editor-builtin-color: #008000;
  --jp-mirror-editor-bracket-color: #997;
  --jp-mirror-editor-tag-color: #170;
  --jp-mirror-editor-attribute-color: #00c;
  --jp-mirror-editor-header-color: blue;
  --jp-mirror-editor-quote-color: #090;
  --jp-mirror-editor-link-color: #00c;
  --jp-mirror-editor-error-color: #f00;
  --jp-mirror-editor-hr-color: #999;

  /*
    RTC user specific colors.
    These colors are used for the cursor, username in the editor,
    and the icon of the user.
  */

  --jp-collaborator-color1: #ffad8e;
  --jp-collaborator-color2: #dac83d;
  --jp-collaborator-color3: #72dd76;
  --jp-collaborator-color4: #00e4d0;
  --jp-collaborator-color5: #45d4ff;
  --jp-collaborator-color6: #e2b1ff;
  --jp-collaborator-color7: #ff9de6;

  /* Vega extension styles */

  --jp-vega-background: white;

  /* Sidebar-related styles */

  --jp-sidebar-min-width: 250px;

  /* Search-related styles */

  --jp-search-toggle-off-opacity: 0.5;
  --jp-search-toggle-hover-opacity: 0.8;
  --jp-search-toggle-on-opacity: 1;
  --jp-search-selected-match-background-color: rgb(245, 200, 0);
  --jp-search-selected-match-color: black;
  --jp-search-unselected-match-background-color: var(
    --jp-inverse-layout-color0
  );
  --jp-search-unselected-match-color: var(--jp-ui-inverse-font-color0);

  /* Icon colors that work well with light or dark backgrounds */
  --jp-icon-contrast-color0: var(--md-purple-600);
  --jp-icon-contrast-color1: var(--md-green-600);
  --jp-icon-contrast-color2: var(--md-pink-600);
  --jp-icon-contrast-color3: var(--md-blue-600);

  /* Button colors */
  --jp-accept-color-normal: var(--md-blue-700);
  --jp-accept-color-hover: var(--md-blue-800);
  --jp-accept-color-active: var(--md-blue-900);
  --jp-warn-color-normal: var(--md-red-700);
  --jp-warn-color-hover: var(--md-red-800);
  --jp-warn-color-active: var(--md-red-900);
  --jp-reject-color-normal: var(--md-grey-600);
  --jp-reject-color-hover: var(--md-grey-700);
  --jp-reject-color-active: var(--md-grey-800);

  /* File or activity icons and switch semantic variables */
  --jp-jupyter-icon-color: #f37626;
  --jp-notebook-icon-color: #f37626;
  --jp-json-icon-color: var(--md-orange-700);
  --jp-console-icon-background-color: var(--md-blue-700);
  --jp-console-icon-color: white;
  --jp-terminal-icon-background-color: var(--md-grey-800);
  --jp-terminal-icon-color: var(--md-grey-200);
  --jp-text-editor-icon-color: var(--md-grey-700);
  --jp-inspector-icon-color: var(--md-grey-700);
  --jp-switch-color: var(--md-grey-400);
  --jp-switch-true-position-color: var(--md-orange-900);
}
</style>
<style type="text/css">
/* Force rendering true colors when outputing to pdf */
* {
  -webkit-print-color-adjust: exact;
}

/* Misc */
a.anchor-link {
  display: none;
}

/* Input area styling */
.jp-InputArea {
  overflow: hidden;
}

.jp-InputArea-editor {
  overflow: hidden;
}

.cm-editor.cm-s-jupyter .highlight pre {
/* weird, but --jp-code-padding defined to be 5px but 4px horizontal padding is hardcoded for pre.cm-line */
  padding: var(--jp-code-padding) 4px;
  margin: 0;

  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  color: inherit;

}

.jp-OutputArea-output pre {
  line-height: inherit;
  font-family: inherit;
}

.jp-RenderedText pre {
  color: var(--jp-content-font-color1);
  font-size: var(--jp-code-font-size);
}

/* Hiding the collapser by default */
.jp-Collapser {
  display: none;
}

@page {
    margin: 0.5in; /* Margin for each printed piece of paper */
}

@media print {
  .jp-Cell-inputWrapper,
  .jp-Cell-outputWrapper {
    display: block;
  }
}
</style>
<!-- Load mathjax -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/latest.js?config=TeX-AMS_CHTML-full,Safe"> </script>
<!-- MathJax configuration -->
<script type="text/x-mathjax-config">
    init_mathjax = function() {
        if (window.MathJax) {
        // MathJax loaded
            MathJax.Hub.Config({
                TeX: {
                    equationNumbers: {
                    autoNumber: "AMS",
                    useLabelIds: true
                    }
                },
                tex2jax: {
                    inlineMath: [ ['$','$'], ["\\(","\\)"] ],
                    displayMath: [ ['$$','$$'], ["\\[","\\]"] ],
                    processEscapes: true,
                    processEnvironments: true
                },
                displayAlign: 'center',
                messageStyle: 'none',
                CommonHTML: {
                    linebreaks: {
                    automatic: true
                    }
                }
            });

            MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
        }
    }
    init_mathjax();
    </script>
<!-- End of mathjax configuration --><script type="module">
  document.addEventListener("DOMContentLoaded", async () => {
    const diagrams = document.querySelectorAll(".jp-Mermaid > pre.mermaid");
    // do not load mermaidjs if not needed
    if (!diagrams.length) {
      return;
    }
    const mermaid = (await import("https://cdnjs.cloudflare.com/ajax/libs/mermaid/10.7.0/mermaid.esm.min.mjs")).default;
    const parser = new DOMParser();

    mermaid.initialize({
      maxTextSize: 100000,
      maxEdges: 100000,
      startOnLoad: false,
      fontFamily: window
        .getComputedStyle(document.body)
        .getPropertyValue("--jp-ui-font-family"),
      theme: document.querySelector("body[data-jp-theme-light='true']")
        ? "default"
        : "dark",
    });

    let _nextMermaidId = 0;

    function makeMermaidImage(svg) {
      const img = document.createElement("img");
      const doc = parser.parseFromString(svg, "image/svg+xml");
      const svgEl = doc.querySelector("svg");
      const { maxWidth } = svgEl?.style || {};
      const firstTitle = doc.querySelector("title");
      const firstDesc = doc.querySelector("desc");

      img.setAttribute("src", `data:image/svg+xml,${encodeURIComponent(svg)}`);
      if (maxWidth) {
        img.width = parseInt(maxWidth);
      }
      if (firstTitle) {
        img.setAttribute("alt", firstTitle.textContent);
      }
      if (firstDesc) {
        const caption = document.createElement("figcaption");
        caption.className = "sr-only";
        caption.textContent = firstDesc.textContent;
        return [img, caption];
      }
      return [img];
    }

    async function makeMermaidError(text) {
      let errorMessage = "";
      try {
        await mermaid.parse(text);
      } catch (err) {
        errorMessage = `${err}`;
      }

      const result = document.createElement("details");
      result.className = 'jp-RenderedMermaid-Details';
      const summary = document.createElement("summary");
      summary.className = 'jp-RenderedMermaid-Summary';
      const pre = document.createElement("pre");
      const code = document.createElement("code");
      code.innerText = text;
      pre.appendChild(code);
      summary.appendChild(pre);
      result.appendChild(summary);

      const warning = document.createElement("pre");
      warning.innerText = errorMessage;
      result.appendChild(warning);
      return [result];
    }

    async function renderOneMarmaid(src) {
      const id = `jp-mermaid-${_nextMermaidId++}`;
      const parent = src.parentNode;
      let raw = src.textContent.trim();
      const el = document.createElement("div");
      el.style.visibility = "hidden";
      document.body.appendChild(el);
      let results = null;
      let output = null;
      try {
        let { svg } = await mermaid.render(id, raw, el);
        svg = cleanMermaidSvg(svg);
        results = makeMermaidImage(svg);
        output = document.createElement("figure");
        results.map(output.appendChild, output);
      } catch (err) {
        parent.classList.add("jp-mod-warning");
        results = await makeMermaidError(raw);
        output = results[0];
      } finally {
        el.remove();
      }
      parent.classList.add("jp-RenderedMermaid");
      parent.appendChild(output);
    }


    /**
     * Post-process to ensure mermaid diagrams contain only valid SVG and XHTML.
     */
    function cleanMermaidSvg(svg) {
      return svg.replace(RE_VOID_ELEMENT, replaceVoidElement);
    }


    /**
     * A regular expression for all void elements, which may include attributes and
     * a slash.
     *
     * @see https://developer.mozilla.org/en-US/docs/Glossary/Void_element
     *
     * Of these, only `<br>` is generated by Mermaid in place of `\n`,
     * but _any_ "malformed" tag will break the SVG rendering entirely.
     */
    const RE_VOID_ELEMENT =
      /<\s*(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)\s*([^>]*?)\s*>/gi;

    /**
     * Ensure a void element is closed with a slash, preserving any attributes.
     */
    function replaceVoidElement(match, tag, rest) {
      rest = rest.trim();
      if (!rest.endsWith('/')) {
        rest = `${rest} /`;
      }
      return `<${tag} ${rest}>`;
    }

    void Promise.all([...diagrams].map(renderOneMarmaid));
  });
</script>
<style>
  .jp-Mermaid:not(.jp-RenderedMermaid) {
    display: none;
  }

  .jp-RenderedMermaid {
    overflow: auto;
    display: flex;
  }

  .jp-RenderedMermaid.jp-mod-warning {
    width: auto;
    padding: 0.5em;
    margin-top: 0.5em;
    border: var(--jp-border-width) solid var(--jp-warn-color2);
    border-radius: var(--jp-border-radius);
    color: var(--jp-ui-font-color1);
    font-size: var(--jp-ui-font-size1);
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  .jp-RenderedMermaid figure {
    margin: 0;
    overflow: auto;
    max-width: 100%;
  }

  .jp-RenderedMermaid img {
    max-width: 100%;
  }

  .jp-RenderedMermaid-Details > pre {
    margin-top: 1em;
  }

  .jp-RenderedMermaid-Summary {
    color: var(--jp-warn-color2);
  }

  .jp-RenderedMermaid:not(.jp-mod-warning) pre {
    display: none;
  }

  .jp-RenderedMermaid-Summary > pre {
    display: inline-block;
    white-space: normal;
  }
</style>
<!-- End of mermaid configuration --></head>
<body class="jp-Notebook" data-jp-theme-light="true" data-jp-theme-name="JupyterLab Light">
<main>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">
<h1 id="Introducci%C3%B3n-a-NetworkX"><strong>Introducción a NetworkX</strong><a class="anchor-link" href="#Introducci%C3%B3n-a-NetworkX">¶</a></h1><blockquote>
<p>Rodolfo Ferro (ferro@cimat.mx)</p>
</blockquote>
</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">
<h2 id="%C2%BFQu%C3%A9-es-NetworkX?">¿Qué es NetworkX?<a class="anchor-link" href="#%C2%BFQu%C3%A9-es-NetworkX?">¶</a></h2><ul>
<li>NetworkX es una biblioteca de Python diseñada para la creación, manipulación y análisis de estructuras de grafos y redes complejas.</li>
<li>Es utilizada en diversas disciplinas, como ciencia de datos, optimización de redes, bioinformática, redes sociales y más.</li>
<li>Permite trabajar con grafos dirigidos, no dirigidos y con pesos.</li>
</ul>
</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">
<h2 id="%C2%BFQu%C3%A9-es-un-Grafo?">¿Qué es un Grafo?<a class="anchor-link" href="#%C2%BFQu%C3%A9-es-un-Grafo?">¶</a></h2><ul>
<li>Un grafo es una estructura compuesta por nodos (también llamados vértices) y aristas (<em>edges</em> o arcos) que conectan estos nodos. Es decir, $G = {V, E}$.</li>
<li>Los grafos pueden ser:<ul>
<li><strong>Dirigidos:</strong> las aristas tienen dirección (e.g., Twitter).</li>
<li><strong>No dirigidos:</strong> las aristas no tienen dirección (e.g., Facebook).</li>
<li><strong>Con pesos:</strong> las aristas tienen un valor asociado (e.g., distancias, costos).</li>
<li><strong>Cíclicos o acíclicos:</strong> Si llegan a tener (o no) un camino cerrado entre sus nodos, es dcir, que vuelve a un nodo inicial.</li>
</ul>
</li>
<li>Los grafos son representaciones matemáticas de relaciones entre entidades.</li>
</ul>
</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">
<h2 id="Representaci%C3%B3n-de-un-Grafo">Representación de un Grafo<a class="anchor-link" href="#Representaci%C3%B3n-de-un-Grafo">¶</a></h2><ul>
<li><p>Si bien, los grafos pueden ser representados <strong>gráficamente</strong> ilustrando los nodos y sus conexiones, los grafos pueden ser representados <strong>computacionalmente</strong> de diferentes formas, por ejemplo:</p>
<ul>
<li><strong>Matriz de incidencia:</strong> una matriz cuadrada donde cada celda $(i,j)$ indica si existe una arista entre los nodos $i$ y $j$.</li>
<li><strong>Matriz de adyacencia:</strong> una matriz cuadrada donde cada celda $(i,j)$ indica el peso de conexión de la arista entre los nodos $i$ y $j$.</li>
<li><strong>Lista de adyacencia:</strong> cada nodo tiene una lista de sus nodos vecinos.</li>
<li><strong>Diccionarios:</strong> donde las claves son los nodos y los valores son listas de nodos conectados.</li>
</ul>
</li>
<li><p>En NetworkX, se utiliza la representación de diccionario de adyacencia, pero también se pueden convertir a matrices de adyacencia u otras representaciones.</p>
</li>
</ul>
</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">
<h4 id="EJEMPLO:"><strong>EJEMPLO:</strong><a class="anchor-link" href="#EJEMPLO:">¶</a></h4><p>Consideremos el siguiente grafo:</p>
<center>
<img alt="No description has been provided for this image" src="https://linkurious.com/images/uploads/2023/03/Shortest-path-algorithm.png" width="50%"/>
</center>
<p>Primero, notemos que este es un grafo:</p>
<ul>
<li><strong>Dirigido:</strong> porque sus aristas tienen dirección.</li>
<li><strong>Acíclico:</strong> porque no existe nodo alguno que al seguir un camino, llegue al mismo.</li>
<li><strong>Pesado:</strong> porque las aristas tienen un valor de costo/peso asociado.</li>
</ul>
<p>Su representación con una matriz de incidencia sería:</p>
<p>$$
\hspace{1.5cm}
\begin{matrix}
A \hspace{0.5cm} B \hspace{0.5cm} C \hspace{0.5cm} D \hspace{0.5cm} E \hspace{0.5cm} F
\end{matrix}\\
\hspace{0.9cm}
\begin{matrix}
↓ \hspace{0.5cm} ↓ \hspace{0.5cm} ↓ \hspace{0.5cm} ↓ \hspace{0.5cm} ↓ \hspace{0.5cm} ↓
\end{matrix}\\
\begin{matrix}
A → \\
B → \\
C → \\
D → \\
E → \\
F →
\end{matrix}
\begin{pmatrix}
0 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0\\
0 &amp; 0 &amp; 1 &amp; 1 &amp; 0 &amp; 0\\
0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0\\
0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1\\
0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0\\
0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0
\end{pmatrix}
$$</p>
<p>Notemos que si fuese un grafo <strong>no dirigido</strong>, su matriz de incidencia sería simétrica.</p>
<p>Su representación con una matriz de adyacencia sería:</p>
<p>$$
\hspace{1.5cm}
\begin{matrix}
A \hspace{0.5cm} B \hspace{0.5cm} C \hspace{0.5cm} D \hspace{0.5cm} E \hspace{0.5cm} F
\end{matrix}\\
\hspace{0.9cm}
\begin{matrix}
↓ \hspace{0.5cm} ↓ \hspace{0.5cm} ↓ \hspace{0.5cm} ↓ \hspace{0.5cm} ↓ \hspace{0.5cm} ↓
\end{matrix}\\
\begin{matrix}
A → \\
B → \\
C → \\
D → \\
E → \\
F →
\end{matrix}
\begin{pmatrix}
0 &amp; 4 &amp; 2 &amp; 0 &amp; 0 &amp; 0\\
0 &amp; 0 &amp; 1 &amp; 10 &amp; 0 &amp; 0\\
0 &amp; 0 &amp; 0 &amp; 0 &amp; 3 &amp; 0\\
0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 11\\
0 &amp; 0 &amp; 0 &amp; 0 &amp; 4 &amp; 0\\
0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0
\end{pmatrix}
$$</p>
<p>Notemos nuevamente que si fuese un grafo <strong>no dirigido</strong>, su matriz de adyacencia también sería simétrica.</p>
</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">
<h2 id="Creaci%C3%B3n-de-Grafos">Creación de Grafos<a class="anchor-link" href="#Creaci%C3%B3n-de-Grafos">¶</a></h2><p><strong>Definición:</strong> Un grafo es una estructura compuesta por nodos (vértices) y conexiones entre ellos (aristas, <em>edges</em> o arcos). NetworkX facilita su creación mediante estructuras de datos flexibles.</p>
</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In [1]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
<div class="cm-editor cm-s-jupyter">
<div class="highlight hl-ipython3"><pre><span></span><span class="c1"># Importar bibliotecas necesarias.</span>
<span class="kn">import</span><span class="w"> </span><span class="nn">networkx</span><span class="w"> </span><span class="k">as</span><span class="w"> </span><span class="nn">nx</span>
<span class="kn">import</span><span class="w"> </span><span class="nn">numpy</span><span class="w"> </span><span class="k">as</span><span class="w"> </span><span class="nn">np</span>
<span class="kn">import</span><span class="w"> </span><span class="nn">matplotlib.pyplot</span><span class="w"> </span><span class="k">as</span><span class="w"> </span><span class="nn">plt</span>
</pre></div>
</div>
</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">
<p><strong>Ejemplo:</strong> Creación de un grafo simple</p>
<p><strong>Explicación:</strong></p>
<ul>
<li>Se crea un grafo vacío.</li>
<li>Se añaden nodos individualmente o en conjunto.</li>
<li>Se agregan aristas entre los nodos.</li>
</ul>
</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In [2]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
<div class="cm-editor cm-s-jupyter">
<div class="highlight hl-ipython3"><pre><span></span><span class="c1"># Sección 1: Creación de un Grafo Simple</span>

<span class="c1"># Crear un grafo no dirigido y añadir nodos y aristas</span>
<span class="n">G</span> <span class="o">=</span> <span class="n">nx</span><span class="o">.</span><span class="n">Graph</span><span class="p">()</span>
<span class="n">G</span><span class="o">.</span><span class="n">add_nodes_from</span><span class="p">([</span><span class="s2">"A"</span><span class="p">,</span> <span class="s2">"B"</span><span class="p">,</span> <span class="s2">"C"</span><span class="p">,</span> <span class="s2">"D"</span><span class="p">])</span>
<span class="n">G</span><span class="o">.</span><span class="n">add_edges_from</span><span class="p">([</span>
    <span class="p">(</span><span class="s2">"A"</span><span class="p">,</span> <span class="s2">"B"</span><span class="p">),</span> <span class="c1"># Arista A &lt;-&gt; B</span>
    <span class="p">(</span><span class="s2">"B"</span><span class="p">,</span> <span class="s2">"C"</span><span class="p">),</span> <span class="c1"># Arista B &lt;-&gt; C</span>
    <span class="p">(</span><span class="s2">"C"</span><span class="p">,</span> <span class="s2">"D"</span><span class="p">)</span>  <span class="c1"># Arista C &lt;-&gt; D</span>
<span class="p">])</span>

<span class="c1"># Mostrar detalles del grafo</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"Nodos:"</span><span class="p">,</span> <span class="n">G</span><span class="o">.</span><span class="n">nodes</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"Aristas:"</span><span class="p">,</span> <span class="n">G</span><span class="o">.</span><span class="n">edges</span><span class="p">)</span>

<span class="c1"># Visualización del grafo</span>
<span class="n">nx</span><span class="o">.</span><span class="n">draw</span><span class="p">(</span>
    <span class="n">G</span><span class="p">,</span>
    <span class="n">with_labels</span><span class="o">=</span><span class="kc">True</span><span class="p">,</span>
    <span class="n">node_color</span><span class="o">=</span><span class="s1">'lightblue'</span><span class="p">,</span>
    <span class="n">edge_color</span><span class="o">=</span><span class="s1">'gray'</span>
<span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span>
</pre></div>
</div>
</div>
</div>
</div>
<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>
<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child">
<div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
<div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain" tabindex="0">
<pre>Nodos: ['A', 'B', 'C', 'D']
Aristas: [('A', 'B'), ('B', 'C'), ('C', 'D')]
</pre>
</div>
</div>
<div class="jp-OutputArea-child">
<div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
<div class="jp-RenderedImage jp-OutputArea-output" tabindex="0">
<img alt="No description has been provided for this image" class="" src="data:image/png;base64,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
"/>
</div>
</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">
<p>Notemos lo siguiente:</p>
<ul>
<li>Podemos crear un grafo vacío con <code>nx.Graph()</code>.</li>
<li>Podemos agregar nodos y aristas al grafo vacío.</li>
<li>Podemos explorar los nodos del grafo con <code>G.nodes</code> y <code>G.edges</code>, respectivamente.</li>
<li>Este gráfo es no dirigido (para grafos dirigidos se usa <code>nx.DiGraph</code>).</li>
<li>El despliegue del grafo es aleatorio (no se han seteado coordenadas/posiciones para los nodos). Esto se puede explorar en la sección avanzada.</li>
</ul>
</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">
<h2 id="Crear-un-grafo-desde-una-matriz-de-incidencia">Crear un grafo desde una matriz de incidencia<a class="anchor-link" href="#Crear-un-grafo-desde-una-matriz-de-incidencia">¶</a></h2><p><strong>Definición:</strong> Una matriz de incidencia es una representación de un grafo en una matriz cuadrada, donde cada fila y columna representan un nodo y las entradas indican si existe una arista entre los nodos correspondientes.</p>
</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In [3]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
<div class="cm-editor cm-s-jupyter">
<div class="highlight hl-ipython3"><pre><span></span><span class="c1"># Sección 2: Crear un grafo desde una matriz de incidencia</span>

<span class="c1"># Crear una matriz de incidencia</span>
<span class="n">inc_matrix</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">([[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">0</span><span class="p">],</span>
                       <span class="p">[</span><span class="mi">1</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">0</span><span class="p">],</span>
                       <span class="p">[</span><span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">],</span>
                       <span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">0</span><span class="p">]])</span>

<span class="c1"># Crear un grafo desde la matriz de incidencia</span>
<span class="n">G_from_matrix</span> <span class="o">=</span> <span class="n">nx</span><span class="o">.</span><span class="n">from_numpy_array</span><span class="p">(</span><span class="n">inc_matrix</span><span class="p">)</span>

<span class="c1"># Mostrar nodos y aristas</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"Nodos del grafo desde matriz:"</span><span class="p">,</span> <span class="n">G_from_matrix</span><span class="o">.</span><span class="n">nodes</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"Aristas del grafo desde matriz:"</span><span class="p">,</span> <span class="n">G_from_matrix</span><span class="o">.</span><span class="n">edges</span><span class="p">)</span>

<span class="c1"># Visualización del grafo creado desde la matriz de incidencia</span>
<span class="n">nx</span><span class="o">.</span><span class="n">draw</span><span class="p">(</span><span class="n">G_from_matrix</span><span class="p">,</span> <span class="n">with_labels</span><span class="o">=</span><span class="kc">True</span><span class="p">,</span> <span class="n">node_color</span><span class="o">=</span><span class="s1">'lightblue'</span><span class="p">,</span> <span class="n">edge_color</span><span class="o">=</span><span class="s1">'gray'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span>
</pre></div>
</div>
</div>
</div>
</div>
<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>
<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child">
<div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
<div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain" tabindex="0">
<pre>Nodos del grafo desde matriz: [0, 1, 2, 3]
Aristas del grafo desde matriz: [(0, 1), (0, 2), (1, 2), (2, 3)]
</pre>
</div>
</div>
<div class="jp-OutputArea-child">
<div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
<div class="jp-RenderedImage jp-OutputArea-output" tabindex="0">
<img alt="No description has been provided for this image" class="" src="data:image/png;base64,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
"/>
</div>
</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">
<p>Notemos lo siguiente:</p>
<ul>
<li>Podemos crear un grafo y definir sus conexiones desde un array de Numpy con <code>nx.from_numpy_array()</code>.</li>
<li>Notemos que es no dirigido, por lo que la matriz de incidencia es simétrica.</li>
<li>La matriz de incidencia simplemente indica si hay conexiones en $(i, j)$, o es el caso particular de adyacencia con peso 1.</li>
</ul>
</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">
<h2 id="Crear-un-grafo-con-pesos-desde-una-matriz-de-incidencia">Crear un grafo con pesos desde una matriz de incidencia<a class="anchor-link" href="#Crear-un-grafo-con-pesos-desde-una-matriz-de-incidencia">¶</a></h2><p><strong>Definición:</strong> Cuando se asignan pesos a las aristas de un grafo, la matriz de adyacencia puede contener valores distintos de 1 para indicar el peso de cada arista.</p>
<p><strong>Ejemplo:</strong> Crear un grafo ponderado.</p>
<p><strong>Explicación:</strong></p>
<ul>
<li>En la matriz de adyacencia, los valores distintos de 0 representan el peso de las aristas entre los nodos correspondientes.</li>
<li>Se crea un grafo ponderado.</li>
<li>Las aristas devuelven los pesos asociados.</li>
</ul>
</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In [4]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
<div class="cm-editor cm-s-jupyter">
<div class="highlight hl-ipython3"><pre><span></span><span class="c1"># Sección 3: Crear un grafo ponderado desde una matriz de adyacencia</span>

<span class="c1"># Crear una matriz de adyacencia</span>
<span class="n">adj_matrix_weighted</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">([[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">],</span>
                                <span class="p">[</span><span class="mi">2</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">3</span><span class="p">,</span> <span class="mi">0</span><span class="p">],</span>
                                <span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">3</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">4</span><span class="p">],</span>
                                <span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">4</span><span class="p">,</span> <span class="mi">0</span><span class="p">]])</span>

<span class="c1"># Crear un grafo ponderado</span>
<span class="n">G_weighted</span> <span class="o">=</span> <span class="n">nx</span><span class="o">.</span><span class="n">from_numpy_array</span><span class="p">(</span><span class="n">adj_matrix_weighted</span><span class="p">)</span>

<span class="c1"># Mostrar aristas con sus pesos</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"Aristas con peso:"</span><span class="p">,</span> <span class="n">G_weighted</span><span class="o">.</span><span class="n">edges</span><span class="p">(</span><span class="n">data</span><span class="o">=</span><span class="kc">True</span><span class="p">))</span>

<span class="c1"># Visualización del grafo ponderado</span>
<span class="n">pos</span> <span class="o">=</span> <span class="n">nx</span><span class="o">.</span><span class="n">spring_layout</span><span class="p">(</span><span class="n">G_weighted</span><span class="p">,</span> <span class="n">seed</span><span class="o">=</span><span class="mi">123</span><span class="p">)</span>
<span class="n">nx</span><span class="o">.</span><span class="n">draw</span><span class="p">(</span>
    <span class="n">G_weighted</span><span class="p">,</span>
    <span class="n">pos</span><span class="p">,</span>
    <span class="n">with_labels</span><span class="o">=</span><span class="kc">True</span><span class="p">,</span>
    <span class="n">node_color</span><span class="o">=</span><span class="s1">'lightblue'</span><span class="p">,</span>
    <span class="n">edge_color</span><span class="o">=</span><span class="s1">'gray'</span>
<span class="p">)</span>

<span class="c1"># Agregamos etiquetas a las aristas</span>
<span class="n">labels</span> <span class="o">=</span> <span class="n">nx</span><span class="o">.</span><span class="n">get_edge_attributes</span><span class="p">(</span><span class="n">G_weighted</span><span class="p">,</span> <span class="s2">"weight"</span><span class="p">)</span>
<span class="n">nx</span><span class="o">.</span><span class="n">draw_networkx_edge_labels</span><span class="p">(</span><span class="n">G_weighted</span><span class="p">,</span> <span class="n">pos</span><span class="p">,</span> <span class="n">edge_labels</span><span class="o">=</span><span class="n">labels</span><span class="p">);</span>

<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span>
</pre></div>
</div>
</div>
</div>
</div>
<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>
<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child">
<div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
<div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain" tabindex="0">
<pre>Aristas con peso: [(0, 1, {'weight': 2}), (1, 2, {'weight': 3}), (2, 3, {'weight': 4})]
</pre>
</div>
</div>
<div class="jp-OutputArea-child">
<div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
<div class="jp-RenderedImage jp-OutputArea-output" tabindex="0">
<img alt="No description has been provided for this image" class="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAApQAAAHzCAYAAACe1o1DAAAAOnRFWHRTb2Z0d2FyZQBNYXRwbG90bGliIHZlcnNpb24zLjEwLjAsIGh0dHBzOi8vbWF0cGxvdGxpYi5vcmcvlHJYcgAAAAlwSFlzAAAPYQAAD2EBqD+naQAAIe1JREFUeJzt3X2U3XVh5/HPnUkmZGZCwtMkSqkZBVGsAgWtrqYkVqtIsRq2T7td3GW7trrntOvuSh/OEVtXWrvd4mJ7upZ1XUvTU9QyUi3bI/GBQBdXpYZIpRYxNwpCMiQ4SWaGzNO9+0cSTMg83ztz7/3d1+vPuTO/+/MchM/5vu9DqVqtVgMAAIvU0egbAACgtRmUAADUxKAEAKAmBiUAADUxKAEAqIlBCQBATQxKAABqYlACAFATgxIAgJoYlAAA1MSgBACgJgYlAAA1MSgBAKiJQQkAQE0MSgAAamJQAgBQE4MSAICaGJQAANTEoAQAoCYGJQAANTEoAQCoiUEJAEBNDEoAAGpiUAIAUBODEgCAmhiUAADUxKAEAKAmBiUAADUxKAEAqIlBCQBATQxKAABqYlACAFATgxIAgJoYlAAA1MSgBACgJgYlAAA1MSgBAKjJikbfAABAq5msVDI8PpVKtZqOUim9XZ1Z0dG+53QGJQDAPBwam0h5aDR7R8YyMjF1yuM9KzuzoWdV+td15/RVKxtwh41Tqlar1UbfBABAsxoZn8zOfQczODqeUpLZhtPxx/u6u3Lp+rXp6WqPszuDEgBgBuWh0ewaPJhqdfYh+WylJKVScnHf2vSv616q22saBiUAwDS+eeBwHto/XPN1Ljq7Ny86a00d7qh5te+rRwEAZlAeGq3LmEySh/YPZ8/QaF2u1azaI+wDAMzTyPhkdg0enPax737rn/KJP/7DfPsbX8/Q/sGsOm11fuj8F+anr3tHXv7an5zxmg8MHsw53V2FfU2lE0oAgBPs3Hf0NZPTefLxx/L0yHC2vOVnct1v/Zf883e+K0nygXf+69z18W0zXrNaPXrdovIaSgCAYw6NTeRze/Yv6G+mpqZy/TVvyPjYWP7ob++d9Xdft/HsQn6kkBNKAIBjykOjKS3wbzo7O3PWhudm9PChWX+vdOz6RVTMkA8AsAh7R8bm9fFAR0ZHMz72dEYPH85Xv3BXdt77xbz6yjfP+jfVY9e/uC532lwMSgCAJBOVyrTfgDOdP/v938ldH//zJElHR0d+7PVvyi+958Y5/25kYiqTlUrhvqbRoAQASDIyPr8xmSRXve2X8so3XJXvD+7LfX/7mVQqU5mcmJjX3w6PT2XdacUalN6UAwCQ5Kmnx3P3dw8s6m/fd93PZ+TwoXzgE3emVJr9VZibf/isnLm6a1HP06yKNY8BABapY44hOJtXvuGn8siDD+Tx8reX9HmalUEJAJCkt6tz0X87PnYkSTI6fHhJn6dZGZQAAElWdHSkZ+XsY+/ggVM/o3JyYiI77vhkuk47LT/0ghfO+vc9KzsL94acxJtyAACesaFnVXYPjc740UEffu/1eXp4OBdd/mM5c/2GDO1/Mvd8ZiDf2/1I3vbr783qnp4Zr106dv0i8qYcAIBj5vqmnL+78458/va/zHcf/mYOD30/q3t68/yXvDRv+sXr8vLXvmHO6xf1m3IMSgCAE+zYM5j9RyZSKtUvTZeSnNPdldecd1bdrtlMihfxAQAWqVwuZ+edt6daqSTz+s6c+SmVkkvXr63b9ZqNQQkAtL1KpZK77747t956a846vTc/clZPsuBv9Z7ZJX1r09NV3LeuFPd/GQDAPAwPD2dgYCB79uzJ5s2bs2nTpnR0dCQrDueh/cM1X/+is9dk47ruOtxp8/IaSgCgbZXL5dx+++0plUrZunVr+vv7T358aDS7Bg+mWl1YAC/laOa+pG9t4cdkYlACAG2oUqnknnvuyY4dO/L85z8/b33rW9Pb2zvt746MT2bnvoMZHB1PKbMPy+OP93V35dL1xc7cJzIoAYC2cmLivuKKK36QuOdwaGwi5aHR7B0Zy8jE1CmP96zszIaeVelf113IjwaajUEJALSNuRL3fE1WKhken0qlWk1HqZTermJ+A858GZQAQOEtJHGzcO0R9gGAtjXju7ipGyeUAEBh1StxMzsnlABA4Ujcy8ugBAAKReJefpI3AFAYEndjOKEEAFqexN1YBiUA0NIk7saTvAGAliVxNwcnlABAyzkxcff392fr1q0SdwMZlABAS5G4m4/kDQC0DIm7OTmhBACansTd3AxKAKCpSdzNT/IGAJqWxN0anFACAE1H4m4tBiUA0FQk7tYjeQMATUPibk1OKAGAhpO4W5tBCQA0lMTd+iRvAKBhJO5icEIJACw7ibtYDEoAYFlJ3MUjeQMAy0biLiYnlADAkpO4i82gBACWlMRdfJI3ALBkJO724IQSAKg7ibu9GJQAQF1J3O1H8gYA6kbibk9OKAGAmknc7c2gBABqcjxxl8tlibtNSd4AwKJJ3CROKAGARZC4OZFBCQAsiMTNs0neAMC8SdxMxwklADBvX//619PX1ydxcxInlABAkuTmm2/Oli1b8rKXvSzVajWlUumkx6vVao7PBombE/mnAQDa3OTkZN7+9rfnXe96Vz72sY/lwIEDKZVKefaZU6lUSkdHhzHJKfwTAQBtbsWKFXnqqafykpe8JPfff3+2bduWJNOOSpiOQQkAbaxSqSRJzj333Nx888150YtelNtvvz133HFHkpySvWE6BiUAtLHj+XrPnj154okn8t73vjednZ254447sm3btlx//fUNvkNagUEJAG1samoqSbJu3bqMj4/n3HPPzfvf//584QtfyNve9rY8+uijSSJ9MyuDEgDa2PETyjVr1jzzs5tuuin79+/Pxo0b8+pXvzqJ9M3sDEoAaGPHh+LTTz+du+++OxdccEGeeOKJ3H///dmyZUu2bduWv/qrv2rwXdLsDEoAIK94xSuybdu2XHnllbnzzjtz0UUX5Td/8zezevXqnH322Y2+PZqcDzYHgDYz3YeWP/XUU/nud7+bl770pens7EylUklHR0dGRkbS09PToDulVRiUANBGyuVyHn300fz4j/94o2+FApG8AaANVCqV3H333bn11luzZ8+eTE5ONvqWKJAVjb4BAGBpDQ8PZ2BgIOVyOZs3b86mTZt8fSJ1JXkDQIGVy+XcfvvtKZVK2bp1a/r7+xt9SxSQE0oAKKBKpZJ77rknO3bsSH9/f7Zu3Zre3t5G3xYFZVACQMFI3Cw3yRsACkTiphGcUAJAAUjcNJJBCQAtTuKm0SRvAGhhxxN3klxzzTUSNw3hhBIAWpDETTMxKAGgxUjcNBvJGwBaiMRNM3JCCQAtQOKmmRmUANDkJG6aneQNAE1M4qYVOKEEgCYkcdNKDEoAaDISN61G8gaAJiJx04qcUAJAE5C4aWUGJQA0mMRNq5O8AaCBJG6KwAklADSAxE2RGJQAsMwkbopG8gaAZSRxU0ROKAFgGUjcFJlBCQBLTOKm6CRvAFhCEjftwAklACwBiZt2YlACQJ1J3LQbyRsA6kjiph05oQSAOpC4aWcGJQDUSOKm3UneAFADiRucUALAokjc8AMGJQAskMQNJ5O8AWABJG44lRNKAJgHiRtmZlACwBwkbpid5A1AoU1WKhken0qlWk1HqZTers6sWMAYlLhhbk4oASicQ2MTKQ+NZu/IWEYmpk55vGdlZzb0rEr/uu6cvmrltNeQuGH+nFACUBgj45PZue9gBkfHU0oy23/gjj/e192VS9evTU/XD85YJG5YGIMSgEIoD41m1+DBVKuzD8lnKyUplZKL+9amf123xA2LYFAC0PK+eeBwHto/XPN1Vh9+Ml+581MSNyyQQQlASysPjWbnvoN1u17Pwb15/eUXS9ywAN6UA0DLGhmfzK7B6cfkIw8+kC9+6hP5h6/clye/92jWrDsjF1x8Wf7Fr12f5/a/YIYrVvP0ug15erKSni6DEubLCSUALevvHj2QJ0fHp33N5B/86r/LN3d+Nf/sDT+V51344gztfzJ/+xf/O0dGR/J7t/1NfviFL5r2mqUk53R35TXnnbWk9w5FYlAC0JIOjU3kc3v2z/j4N7/21bzgRy7Oyq6uZ372+J7d+Y9v/om86g1X5df+4I9nvf7rNp4940cKASdzng9ASyoPjaY0y+Mv+tGXnzQmk+S5G5+f885/YR779rdmvXbp2PWB+TEoAWhJe0fGFvTxQElSrVYzdGB/1pxx5uy/d+z6wPwYlAC0nIlKZdpvwJnLPZ8ZyFP7nsir3/TmOX93ZGIqk5XKYm4P2o5BCUDLGRlf+Jh8bPe38pH3/VYuvOSybH7Lz87rb4YX8TzQjgxKAFpOZYHvJ/3+k4P53V++Nt1r1uQ/3/w/09nZuSTPA+3K51AC0HI6SrO9HedkI4cP5ca3/8uMHDqU9//Fp3Lm+g1L8jzQzgxKAFpOb9f8ThjHx47k997xtjy+Z3fe+9GP57zzX7gkzwPtTvIGoOWs6OhIz8rZx97U1FRuetev5OEH/j7/6b/fkgsvvXxBz9GzsjMrfP0izIsTSgBa0oaeVdk9NDrjRwf92e//Tr76hbty+ZbXZ/jgUHZ8+vaTHr/izdfMeO3SsesD82NQAtCS+td159uzfPj4nn/8RpLk/i9uz/1f3H7K47MNyuqx6wPz46sXAWhJlUolf/Pg7kx0rU6pjmnad3nDwnlxCAAtZ3h4ONu2bcs/bP906v1G7FIpuXT92vpeFApO8gagpZTL5QwMDKRareYXrrkmOeOM7Nx3sG7Xv6RvbXq6/OcRFsL/YwBoCZVKJffcc0927NiR/v7+bN26Nb29vUmSsampPLR/uObnuOjsNdnotZOwYF5DCUDTGx4ezsDAQMrlcjZv3pxNmzal41mvmywPjWbX4MFUq5nxnd/TKeVo5r6kb60xCYtkUALQ1E5M3Ndcc036+/tn/N2R8cns3Hcwg6PjKWX2YXn88b7urly6XuaGWhiUADSl2RL3XA6NTaQ8NJq9I2MZmZg65fGelZ3Z0LMq/eu6c/qqlfW+dWg7BiUATWc+iXu+JiuVDI9PpVKtpqNUSm+Xb8CBejMoAWgqC0ncQHPwghEAmkItiRtoLIMSgIarZ+IGlp/kDUBDSdzQ+pxQAtAQEjcUh0EJwLKTuKFYJG8AlpXEDcXjhBKAZSFxQ3EZlAAsOYkbik3yBmBJSdxQfE4oAVgSEje0D4MSgLqTuKG9SN4A1JXEDe3HCSUAdSFxQ/syKAGomcQN7U3yBqAmEjfghBKARZG4geMMSgAWTOIGTiR5A7AgEjfwbE4oAZgXiRuYiUEJwJwkbmA2kjcAs5K4gbk4oQRgWhI3MF8GJQCnkLiBhZC8ATiJxA0slBNKAJJI3MDiGZQASNxATSRvgDYncQO1ckIJ0KYkbqBeDEqANiRxA/UkeQO0GYkbqDcnlABtQuIGlopBCdAGJG5gKUneAAUncQNLzQklQEFJ3MByMSgBCkjiBpaT5A1QMBI3sNycUAIUhMQNNIpBCVAAEjfQSJI3QIuTuIFGc0IJ0KIkbqBZGJQALUjiBpqJ5A3QYiRuoNk4oQRoERI30KwMSoAWIHEDzUzyBmhyEjfQ7JxQAjQpiRtoFQYlQBOSuIFWYlACNJlqtZrdu3dncHAw1157rcQNND2voQRoUkeOHMlpp53W6NsAmJNBCbBMHnrooXz6059OtVrNW97yllxwwQVZsWL6UFStVlMqlZb5DgEWxwtyAJbBhz70obzqVa/Kfffdlw9/+MN561vfmgceeGDG3zcmgVbiNZQAS+yGG27Ixz72sdx222154xvfmFKplHXr1uWrX/1qLr/88kbfHkDNnFACLKGnn346lUolt9xyS6688spnTh63bNmS/v7+7N69OxMTEw2+S4DaeA0lwBLbt29fTj/99KxevTpJcvXVV+ezn/1sXvayl2Xv3r25+uqrc8MNN+Q5z3lOg+8UYHGcUAIssfXr12f16tWpVqu56aab8vjjj+fLX/5ytm/fnt/+7d/Ol770pWzfvr3RtwmwaE4oAZbR6Ohourq6Tnp394YNG/LOd74zN9xwQwPvDGDxvCkHYBmtXr36pHdwP/zwwzn//PPzmte8poF3BVAbyRtgiVSr1Tw7Ap04Jr/zne/kHe94R1avXp1LLrlkme8OoH4MSoAlMDw8nLvuumvax+67775cf/312bRpU9auXZvt27fnzDPPXOY7BKgfgxKgzsrlcv70T/80Dz74YIaGhk55/OUvf3mGh4fzgQ98IAMDA8t/gwB15k05AHVSqVRy7733ZseOHdm4cWO2bt2a3t7eaX93amoqnZ2dy3yHAEvDoASog+Hh4QwMDKRcLmfz5s3ZtGlTOjpEIKA9GJQANSqXyxkYGEi1Ws0111yT/v7+Rt8SwLLysUEAi7SQxA1QZAYlwCJI3AA/IHkDLJDEDXAyJ5QA8yRxA0zPoASYB4kbYGaSN8AcJG6A2TmhBJiBxA0wPwYlwDQkboD5k7wBnkXiBlgYJ5QAx0jcAItjUAJE4gaoheQNtD2JG6A2TiiBtiVxA9SHQQm0JYkboH4kb6DtSNwA9eWEEmgbEjfA0jAogbYgcQMsHckbKDyJG2BpOaEECkviBlgeBiVQSBI3wPKRvIHCkbgBlpcTSqAwJG6AxjAogUKQuAEaR/IGWp7EDdBYTiiBliVxAzQHgxJoSRI3QPOQvIGWI3EDNBcnlEDLkLgBmpNBCbQEiRugeUneQNOTuAGamxNKoGlJ3ACtwaAEmpLEDdA6JG+g6UjcAK3FCSXQNCRugNZkUAJNQeIGaF2SN9BwEjdAa3NCCTSMxA1QDAYl0BASN0BxSN7AspO4AYrFCSWwbCRugGIyKIFlIXEDFJfkDSw5iRug2JxQAktG4gZoDwYlsCQkboD2IXkDdSdxA7QXJ5RA3UjcAO3JoASSJJOVSobHp1KpVtNRKqW3qzMrFpCoJW6A9iV5Qxs7NDaR8tBo9o6MZWRi6pTHe1Z2ZkPPqvSv687pq1bOeB2JG6C9GZTQhkbGJ7Nz38EMjo6nlGS2fwkcf7yvuyuXrl+bnq4fhA2JG4DEoIS2Ux4aza7Bg6lWZx+Sz1ZKUiolF/etTf+6bokbgGcYlNBGvnngcB7aP1zzdZ7TOZH7/vqTEjcASQxKaBvlodHs3Hewbtc7svsbefOmV0rcAHiXN7SDkfHJ7BqceUw+PTKSv/5ff5JvfX1nHnnwgQwfHMq//90P5rVbf276P6hW0/2Cl6TUddoS3TEArcQLnqAN7Nx39DWTMzn8/afyyT/5YB7b/a0878KL5r5gqZRqNXU98QSgdTmhhII7NDaRwdHxWX/njL6+fOTeB3LGOX155MFd+fWfuXLO61aTDI6O59DYxKwfKQRA8TmhhIIrD42mNMfvrOxalTPO6VvwtUvHrg9AezMooeD2jowt6OOBFqJ67PoAtDeDEgpsolKZ9htw6mlkYiqTlcqSPgcAzc2ghAIbGV/aMXnc8DI9DwDNyaCEAqss08fMLtfzANCcDEoosI7SXG/Haa3nAaA5GZRQYL1dnYV6HgCak0EJBbaioyM9K5d27PWs7MyKDv8qAWhnPtgcCm5Dz6rsHhqd86OD/s+2j2b08KE8NbgvSXL/F7fnqX1PJEmu/MXr0rPm9FP+pnTs+gC0t1K16tX0UGSHxibyuT375/y9X3ntK/Lk449N+9j/+NyX0/dD50372Os2nu2bcgDanEEJbWD7w4/l0FQppTqm6VKSc7q78przzqrbNQFoTV74BAVWqVSyY8eO3P+ZTyZ1/r6cUim5dP3aul4TgNbkNZRQUMPDwxkYGEi5XM7mzZtz3oZ1eWDwcN2uf0nf2vR0+VcIAAYlFFK5XM7AwECS5Nprr01/f3+SZLxSzUP7h2u+/kVnr8nGdd01XweAYvAaSiiQSqWSe++9Nzt27MjGjRuzdevW9Pb2nvQ75aHR7Bo8mGp1YRG8lKOZ+5K+tcYkACcxKKEgnp24N23alI4Z3oQzMj6ZnfsOZnB0PKXMPiyPP97X3ZVL18vcAJzKoIQCODFxb9269ZnEPZdDYxMpD41m78hYRiamTnm8Z2VnNvSsSv+6bh8NBMCMDEpoYfNJ3PM1WalkeHwqlWo1HaVSert8Aw4A82NQQotaSOIGgKVkUEILWmziBoCl4NX10ELqmbgBoF4MSmgREjcAzUryhhYgcQPQzJxQQhOTuAFoBQYlNCmJG4BWIXlDE5K4AWglTiihiUjcALQigxKahMQNQKuSvKEJSNwAtDInlNBAEjcARWBQQoNI3AAUheQNDSBxA1AkTihhGUncABSRQQnLROIGoKgkb1gGEjcAReaEEpaQxA1AOzAoYYlI3AC0C8kbloDEDUA7cUIJdSRxA9CODEqoE4kbgHYleUMdSNwAtDMnlFADiRsADEpYNIkbAI6SvGERJG4A+AEnlLAAEjcAnMqghHmSuAFgepI3zIPEDQAzc0IJs5C4AWBuBiXMQOIGgPmRvGEaEjcAzJ8TSjiBxA0AC2dQwjESNwAsjuQNkbgBoBZOKGlrEjcA1M6gpG1J3ABQH5I3bUniBoD6cUJJW5G4AaD+DErahsQNAEtD8qYtSNwAsHScUFJoEjcALD2DksKSuAFgeUjeFJLEDQDLxwklhSJxA8DyMygpDIkbABpD8qYQJG4AaBwnlLQ0iRsAGs+gpGVJ3ADQHCRvWpLEDQDNwwklLUXiBoDmY1DSMiRuAGhOkjctYc+ePbn99tuTSNwA0GycUNL0qtVqhoeHc84550jcANCEnFDSNKrVakql0oyPVyoViRsAmpBBScM88sgjuf/++7Ny5cq86U1vyurVqxt9SwDAIkjeNMSHPvSh3Hjjjdm4cWMeeuihvPjFL84nP/nJPO95z2v0rQEAC6QfsuxuvPHGfPCDH8xHP/rR3HXXXSmXy3nsscdyyy23JDmavgGA1uGEkmU1MjKSz3/+83nf+96Xq666KpOTk1mxYkWuu+663HvvvalUKrO+jhIAaD4GJcuqp6cn73nPe3LhhRcmSVasOPqP4JEjR7JmzRpvugGAFmRQsuy2bNmS5GjanpqayooVKzIyMpILLrggiXdzA0Cr8V9tGubEtP3II49k7dq1SZKOjo488MADefjhhxt1awDAAhiUNNTx5P2d73wnl19+eZLk3e9+dy677LIcOHCgkbcGAMyT5M2yqVQqSXJKzt63b19OP/30rF27Nlu2bMkjjzySr3zlK7nssssacZsAwAI5oWRZlMvl3HbbbdM+duDAgXzta1/LFVdcke7u7jz66KPGJAC0EIOSJVWpVHL33Xfn1ltvzeTkZCYmJk75nfPPPz+rV6/ORz7ykdx5550NuEsAoBa+epElMzw8nIGBgezZsydXXHFFNm3aNOO7t8fHx9PV1bXMdwgA1INByZIol8sZGBhIkmzdujX9/f0NviMAYKl4Uw51ValUcs8992THjh3p7+/P1q1b09vb2+jbAgCWkEFJ3ZyYuDdv3jxr4gYAikPypi4kbgBoX04oqYnEDQAYlCyaxA0AJJI3iyRxAwDHOaFkQSRuAODZDErmTeIGAKYjeTMvEjcAMBMnlMxK4gYA5mJQMiOJGwCYD8mbaUncAMB8OaHkJBI3ALBQBiXPkLgBgMWQvEkicQMAi+eEss1J3ABArQzKNiZxAwD1IHm3KYkbAKgXJ5RtRuIGAOrNoGwjEjcAsBQk7zYhcQMAS8UJZcFJ3ADAUjMoC0ziBgCWg+RdUBI3ALBcnFAWjMQNACw3g7JAJG4AoBEk74KQuAGARnFC2eIkbgCg0QzKFiZxAwDNQPJuURI3ANAsnFC2GIkbAGg2BmULkbgBgGYkebcIiRsAaFZOKJucxA0ANDuDsolJ3ABAK5C8m5TEDQC0CieUTUbiBgBajUHZRCRuAKAVSd5NQuIGAFqVE8oGk7gBgFZnUDaQxA0AFIHk3SASNwBQFE4ol5nEDQAUjUG5jCRuAKCIJO9lInEDAEXlhHKJSdwAQNEZlEtI4gYA2oHkvUQkbgCgXTihrDOJGwBoNwZlHUncAEA7krzrROIGANpV259QTlYqGR6fSqVaTUeplN6uzqxYwKmixA0AtLu2HJSHxiZSHhrN3pGxjExMnfJ4z8rObOhZlf513Tl91coZryNxAwC0WfIeGZ/Mzn0HMzg6nlKS2f6HH3+8r7srl65fm56uk7e3xA0AcFTbDMry0Gh2DR5MtTr7kHy2UpJSKbm4b23613VL3AAAz9IWg/KbBw7nof3DNV/n/NO78sD2O7Nnz55cccUVEjcAQNpgUJaHRrNz38G6Xe/JXf8vP/nySyRuAIBjCn28NjI+mV2D04/JifGx/Pl/e39+adOl+YWLn5/f+Nmrsuv/7pj1etVqNesvfmX6zj1vKW4XAKAlFXpQ7tx39DWT0/mj3/gP+czHbsmmq9+af/Nb70tHR0du/OV/lX/8+y/PeL1SqZTqsesCAHBUYZP3obGJfG7P/mkf+9bXd+Y3fvaqXPvu9+Sn/+07kiTjY0fyrqtfm7VnnpXfve0zc17/dRvPnvUjhQAA2kVhTyjLQ6MpzfDYlz77N+no7Mzrf+4Xn/lZ16rT8hPX/EL+6YG/z/4nvjfrtUvHrg8AQIEH5d6RsRk/Hqj8j/+Q5258frp715z08/Nfdsmxx78x67Wrx64PAEBBB+VEpTLtN+Ac9/0nB3PGOetP+fnxn31/cN+czzEyMZXJSmXxNwkAUBCFHJQj4zOPySQZP3IkK7q6Tvn5ylWrjj4+dmRezzM8x/MAALSDQg7KyhzvM+o67bRMjo+f8vOJsaMZu2vVaXV5HgCAdlDIQdlRmuntOEedcU5fvv/kqVn7+M/O6Ds1hy/meQAA2kEhB2VvV+esj2980Uvy+J7dGR0+fNLPv7VrZ5Kk/8UvqcvzAAC0g0IOyhUdHelZOfPYe9UbfiqVqals//i2Z342MT6WL3zq47ng4h/N2c85d87n6FnZmRW+xxsAICsafQNLZUPPquweGp32o4NeePGP5lVvvDp/8cHfy8Gn9mfDD/fn7js+kSe/92je+f4/nPPapWPXBwCgTb8pJzn6Tu6/vPm/5p7PDGTk4ME878IX5+d/9fpcumnzvK7vm3IAAI4q7KBMkr979ECeHB2f8QPOF6OU5JzurrzmvLPqeFUAgNZV6BcBXrp+ber9RuxS6eh1AQA4qtCDsqdrRS7uq+/4u6RvbXq6CvvSUwCABSv0oEyS/nXduejs3rpc66Kz12Tjuu66XAsAoCgK/RrKE5WHRrNr8GCq1SzoNZWlHM3cl/StNSYBAKbRNoMySUbGJ7Nz38EMjo6nlNmH5fHH+7q7cul6mRsAYCZtNSiPOzQ2kfLQaPaOjGVkYuqUx3tWdmZDz6r0r+v20UAAAHNoy0F5oslKJcPjU6lUq+koldLb5RtwAAAWou0HJQAAtXEUBwBATQxKAABqYlACAFATgxIAgJoYlAAA1MSgBACgJgYlAAA1MSgBAKiJQQkAQE0MSgAAamJQAgBQE4MSAICaGJQAANTEoAQAoCYGJQAANTEoAQCoiUEJAEBNDEoAAGpiUAIAUBODEgCAmhiUAADUxKAEAKAmBiUAADUxKAEAqIlBCQBATQxKAABqYlACAFATgxIAgJoYlAAA1MSgBACgJgYlAAA1MSgBAKiJQQkAQE0MSgAAamJQAgBQE4MSAICaGJQAANTk/wM82pdfAX+wFwAAAABJRU5ErkJggg==
"/>
</div>
</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">
<p>Notemos lo siguiente:</p>
<ul>
<li>Podemos crear un grafo ponderado y definir sus conexiones desde un array de Numpy con <code>nx.from_numpy_array()</code>.</li>
<li>Notemos que es no dirigido, por lo que la matriz de adyacencia es simétrica.</li>
<li>La matriz de adyacencia indica el peso de las conexiones en $(i, j)$.</li>
<li>Definimos posiciones a través de un layout fijo, usando <code>nx.spring_layout()</code>.</li>
<li>Obtuvimos los valores de los pesos para usarlos como etiquetas con <code>nx.get_edge_attributes()</code>.</li>
<li>Le pasamos el parámetro <code>pos</code> a los métodos para desplegar los grafos.</li>
</ul>
</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">
<h2 id="Crear-un-grafo-dirigido-desde-una-matriz-de-incidencia">Crear un grafo dirigido desde una matriz de incidencia<a class="anchor-link" href="#Crear-un-grafo-dirigido-desde-una-matriz-de-incidencia">¶</a></h2><p><strong>Definición:</strong> Un grafo dirigido es aquel en el que las aristas tienen una dirección, lo que significa que las relaciones entre los nodos son unidireccionales.</p>
<p><strong>Ejemplo:</strong> Crear un grafo dirigido.</p>
<p><strong>Explicación:</strong></p>
<ul>
<li>La matriz de adyacencia representa un grafo dirigido con relaciones unidireccionales.</li>
<li>Se utiliza el parámetro <code>create_using=nx.DiGraph</code> para especificar que el grafo debe ser dirigido.</li>
<li>Se pueden acceder a las aristas del grafo dirigido.</li>
</ul>
</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In [5]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
<div class="cm-editor cm-s-jupyter">
<div class="highlight hl-ipython3"><pre><span></span><span class="c1"># Sección 4: Crear un grafo dirigido desde una matriz de incidencia</span>

<span class="c1"># Crear una matriz de incidencia para un grafo dirigido</span>
<span class="n">adj_matrix_directed</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">([[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">],</span>
                                <span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">0</span><span class="p">],</span>
                                <span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">],</span>
                                <span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">]])</span>

<span class="c1"># Crear un grafo dirigido</span>
<span class="n">G_directed</span> <span class="o">=</span> <span class="n">nx</span><span class="o">.</span><span class="n">from_numpy_array</span><span class="p">(</span><span class="n">adj_matrix_directed</span><span class="p">,</span> <span class="n">create_using</span><span class="o">=</span><span class="n">nx</span><span class="o">.</span><span class="n">DiGraph</span><span class="p">)</span>

<span class="c1"># Mostrar aristas dirigidas</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"Aristas dirigidas:"</span><span class="p">,</span> <span class="n">G_directed</span><span class="o">.</span><span class="n">edges</span><span class="p">)</span>

<span class="c1"># Visualización del grafo dirigido</span>
<span class="n">nx</span><span class="o">.</span><span class="n">draw</span><span class="p">(</span>
    <span class="n">G_directed</span><span class="p">,</span>
    <span class="n">with_labels</span><span class="o">=</span><span class="kc">True</span><span class="p">,</span>
    <span class="n">node_color</span><span class="o">=</span><span class="s1">'lightblue'</span><span class="p">,</span>
    <span class="n">edge_color</span><span class="o">=</span><span class="s1">'gray'</span><span class="p">,</span>
    <span class="n">arrows</span><span class="o">=</span><span class="kc">True</span>
<span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span>
</pre></div>
</div>
</div>
</div>
</div>
<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>
<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child">
<div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
<div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain" tabindex="0">
<pre>Aristas dirigidas: [(0, 1), (1, 2), (2, 3)]
</pre>
</div>
</div>
<div class="jp-OutputArea-child">
<div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
<div class="jp-RenderedImage jp-OutputArea-output" tabindex="0">
<img alt="No description has been provided for this image" class="" src="data:image/png;base64,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
"/>
</div>
</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">
<h2 id="Propiedades-de-los-Grafos">Propiedades de los Grafos<a class="anchor-link" href="#Propiedades-de-los-Grafos">¶</a></h2><ul>
<li><strong>Grado de un nodo:</strong> El número de aristas conectadas a un nodo.</li>
<li><strong>Conectividad:</strong> Determina si existe un camino entre todos los nodos.</li>
<li><strong>Ciclo:</strong> Un camino cerrado en el que el primer y último nodo coinciden.</li>
<li><strong>Componentes conexas:</strong> Subgrafos donde cada par de nodos está conectado entre sí.</li>
</ul>
</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In [6]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
<div class="cm-editor cm-s-jupyter">
<div class="highlight hl-ipython3"><pre><span></span><span class="c1"># Sección 5: Propiedades de los Grafos</span>

<span class="c1"># Grado de un nodo</span>
<span class="n">degree</span> <span class="o">=</span> <span class="n">G</span><span class="o">.</span><span class="n">degree</span><span class="p">(</span><span class="s2">"A"</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"Grado del nodo 'A':"</span><span class="p">,</span> <span class="n">degree</span><span class="p">)</span>

<span class="c1"># Conectividad (comprobamos si el grafo es conexo)</span>
<span class="n">is_connected</span> <span class="o">=</span> <span class="n">nx</span><span class="o">.</span><span class="n">is_connected</span><span class="p">(</span><span class="n">G</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"¿El grafo es conexo?"</span><span class="p">,</span> <span class="n">is_connected</span><span class="p">)</span>

<span class="c1"># Componentes conexas</span>
<span class="n">components</span> <span class="o">=</span> <span class="nb">list</span><span class="p">(</span><span class="n">nx</span><span class="o">.</span><span class="n">connected_components</span><span class="p">(</span><span class="n">G</span><span class="p">))</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"Componentes conexas:"</span><span class="p">,</span> <span class="n">components</span><span class="p">)</span>
</pre></div>
</div>
</div>
</div>
</div>
<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>
<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child">
<div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
<div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain" tabindex="0">
<pre>Grado del nodo 'A': 1
¿El grafo es conexo? True
Componentes conexas: [{'B', 'A', 'D', 'C'}]
</pre>
</div>
</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">
<h2 id="Visualizaci%C3%B3n-de-Grafos">Visualización de Grafos<a class="anchor-link" href="#Visualizaci%C3%B3n-de-Grafos">¶</a></h2><p>NetworkX permite la visualización de grafos utilizando Matplotlib.</p>
<p>Como hemos visto hasta ahora:</p>
<ul>
<li>Se puede desplegar el grafo con etiquetas.</li>
<li>Se pueden personalizar colores de nodos y aristas.</li>
<li>Se muestra el grafo en pantalla.</li>
</ul>
</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">
<h2 id="M%C3%A9todos-y-Par%C3%A1metros---Dijkstra">Métodos y Parámetros - Dijkstra<a class="anchor-link" href="#M%C3%A9todos-y-Par%C3%A1metros---Dijkstra">¶</a></h2><p><strong>Definición:</strong> El algoritmo de Dijkstra encuentra el camino más corto desde un nodo origen a un nodo destino en un grafo ponderado.</p>
<h3 id="%C2%BFC%C3%B3mo-funciona-el-algoritmo-de-Dijkstra?">¿Cómo funciona el algoritmo de Dijkstra?<a class="anchor-link" href="#%C2%BFC%C3%B3mo-funciona-el-algoritmo-de-Dijkstra?">¶</a></h3><ul>
<li>El algoritmo comienza desde el nodo de origen y explora todos los caminos hacia los nodos vecinos, siempre eligiendo el nodo más cercano.</li>
<li>Para cada nodo, se calcula la distancia más corta desde el nodo origen.</li>
<li>A medida que se exploran los nodos, se actualiza la distancia más corta conocida.</li>
<li>Al final, se obtiene el camino más corto entre el nodo origen y el nodo destino.</li>
</ul>
<p><strong>Ejemplo de implementación.</strong></p>
<p><strong>Explicación de parámetros:</strong></p>
<ul>
<li><strong><code>source="A"</code>:</strong> Nodo de origen.</li>
<li><strong><code>target="D"</code>:</strong> Nodo de destino.</li>
<li><strong><code>weight=None</code></strong> (Opcional): Especifica que el grafo no tiene pesos. Si tuviera pesos, se indicaría el nombre del atributo del peso.</li>
</ul>
</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In [7]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
<div class="cm-editor cm-s-jupyter">
<div class="highlight hl-ipython3"><pre><span></span><span class="c1"># Sección 6: Algoritmo de Dijkstra</span>

<span class="c1"># Grafo ponderado para Dijkstra</span>
<span class="n">G_weighted</span><span class="o">.</span><span class="n">add_edge</span><span class="p">(</span><span class="s2">"A"</span><span class="p">,</span> <span class="s2">"D"</span><span class="p">,</span> <span class="n">weight</span><span class="o">=</span><span class="mi">5</span><span class="p">)</span>
<span class="n">G_weighted</span><span class="o">.</span><span class="n">add_edge</span><span class="p">(</span><span class="s2">"B"</span><span class="p">,</span> <span class="s2">"D"</span><span class="p">,</span> <span class="n">weight</span><span class="o">=</span><span class="mi">3</span><span class="p">)</span>

<span class="c1"># Encontrar el camino más corto usando el algoritmo de Dijkstra</span>
<span class="n">shortest_path</span> <span class="o">=</span> <span class="n">nx</span><span class="o">.</span><span class="n">shortest_path</span><span class="p">(</span><span class="n">G_weighted</span><span class="p">,</span> <span class="n">source</span><span class="o">=</span><span class="s2">"A"</span><span class="p">,</span> <span class="n">target</span><span class="o">=</span><span class="s2">"D"</span><span class="p">,</span> <span class="n">weight</span><span class="o">=</span><span class="s2">"weight"</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"Camino más corto de A a D:"</span><span class="p">,</span> <span class="n">shortest_path</span><span class="p">)</span>
</pre></div>
</div>
</div>
</div>
</div>
<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>
<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child">
<div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
<div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain" tabindex="0">
<pre>Camino más corto de A a D: ['A', 'D']
</pre>
</div>
</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">
<h2 id="Flujo-M%C3%A1ximo-en-Redes">Flujo Máximo en Redes<a class="anchor-link" href="#Flujo-M%C3%A1ximo-en-Redes">¶</a></h2><p><strong>Definición:</strong> El problema de flujo máximo busca encontrar la mayor cantidad de flujo que puede moverse de un nodo origen a un nodo destino en una red con capacidades limitadas.</p>
<p><strong>Ejemplo.</strong></p>
</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In [8]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
<div class="cm-editor cm-s-jupyter">
<div class="highlight hl-ipython3"><pre><span></span><span class="c1"># Sección 7: Flujo Máximo</span>

<span class="c1"># Crear un grafo de flujo con capacidades</span>
<span class="n">G_flow</span> <span class="o">=</span> <span class="n">nx</span><span class="o">.</span><span class="n">DiGraph</span><span class="p">()</span>
<span class="n">G_flow</span><span class="o">.</span><span class="n">add_edge</span><span class="p">(</span><span class="s2">"A"</span><span class="p">,</span> <span class="s2">"B"</span><span class="p">,</span> <span class="n">capacity</span><span class="o">=</span><span class="mi">4</span><span class="p">)</span>
<span class="n">G_flow</span><span class="o">.</span><span class="n">add_edge</span><span class="p">(</span><span class="s2">"A"</span><span class="p">,</span> <span class="s2">"C"</span><span class="p">,</span> <span class="n">capacity</span><span class="o">=</span><span class="mi">5</span><span class="p">)</span>
<span class="n">G_flow</span><span class="o">.</span><span class="n">add_edge</span><span class="p">(</span><span class="s2">"B"</span><span class="p">,</span> <span class="s2">"C"</span><span class="p">,</span> <span class="n">capacity</span><span class="o">=</span><span class="mi">3</span><span class="p">)</span>
<span class="n">G_flow</span><span class="o">.</span><span class="n">add_edge</span><span class="p">(</span><span class="s2">"B"</span><span class="p">,</span> <span class="s2">"D"</span><span class="p">,</span> <span class="n">capacity</span><span class="o">=</span><span class="mi">2</span><span class="p">)</span>
<span class="n">G_flow</span><span class="o">.</span><span class="n">add_edge</span><span class="p">(</span><span class="s2">"C"</span><span class="p">,</span> <span class="s2">"D"</span><span class="p">,</span> <span class="n">capacity</span><span class="o">=</span><span class="mi">3</span><span class="p">)</span>

<span class="c1"># Calcular el flujo máximo entre A y D</span>
<span class="n">flow_value</span><span class="p">,</span> <span class="n">flow_dict</span> <span class="o">=</span> <span class="n">nx</span><span class="o">.</span><span class="n">maximum_flow</span><span class="p">(</span><span class="n">G_flow</span><span class="p">,</span> <span class="s2">"A"</span><span class="p">,</span> <span class="s2">"D"</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"Flujo máximo de A a D:"</span><span class="p">,</span> <span class="n">flow_value</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"Distribución del flujo:"</span><span class="p">,</span> <span class="n">flow_dict</span><span class="p">)</span>
</pre></div>
</div>
</div>
</div>
</div>
<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>
<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child">
<div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
<div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain" tabindex="0">
<pre>Flujo máximo de A a D: 5
Distribución del flujo: {'A': {'B': 4, 'C': 1}, 'B': {'C': 2, 'D': 2}, 'C': {'D': 3}, 'D': {}}
</pre>
</div>
</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">
<hr/>
</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">
<h1 id="Avanzado---Re-etiquetado-y-pocisionamiento"><strong>Avanzado - Re-etiquetado y pocisionamiento</strong><a class="anchor-link" href="#Avanzado---Re-etiquetado-y-pocisionamiento">¶</a></h1>
</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">
<h3 id="Avanzado:-Renombrar-nodos."><strong>Avanzado:</strong> Renombrar nodos.<a class="anchor-link" href="#Avanzado:-Renombrar-nodos.">¶</a></h3>
</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In [9]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
<div class="cm-editor cm-s-jupyter">
<div class="highlight hl-ipython3"><pre><span></span><span class="c1"># Crear una matriz de adyacencia</span>
<span class="n">adj_matrix</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">([[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">0</span><span class="p">],</span>
                       <span class="p">[</span><span class="mi">1</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">0</span><span class="p">],</span>
                       <span class="p">[</span><span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">],</span>
                       <span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">0</span><span class="p">]])</span>

<span class="c1"># Crear un grafo desde la matriz de adyacencia</span>
<span class="n">G_from_matrix</span> <span class="o">=</span> <span class="n">nx</span><span class="o">.</span><span class="n">from_numpy_array</span><span class="p">(</span><span class="n">adj_matrix</span><span class="p">)</span>
<span class="n">pos_G</span> <span class="o">=</span> <span class="n">nx</span><span class="o">.</span><span class="n">spring_layout</span><span class="p">(</span><span class="n">G_from_matrix</span><span class="p">,</span> <span class="n">seed</span><span class="o">=</span><span class="mi">123</span><span class="p">)</span>

<span class="c1"># Aplicamos remapeo de etiquetas</span>
<span class="n">mapping</span> <span class="o">=</span> <span class="p">{</span><span class="mi">0</span><span class="p">:</span> <span class="s2">"A"</span><span class="p">,</span> <span class="mi">1</span><span class="p">:</span> <span class="s2">"B"</span><span class="p">,</span> <span class="mi">2</span><span class="p">:</span> <span class="s2">"C"</span><span class="p">,</span> <span class="mi">3</span><span class="p">:</span> <span class="s2">"D"</span><span class="p">}</span>
<span class="n">H</span> <span class="o">=</span> <span class="n">nx</span><span class="o">.</span><span class="n">relabel_nodes</span><span class="p">(</span><span class="n">G_from_matrix</span><span class="p">,</span> <span class="n">mapping</span><span class="p">)</span>
<span class="n">pos_H</span> <span class="o">=</span> <span class="n">nx</span><span class="o">.</span><span class="n">spring_layout</span><span class="p">(</span><span class="n">H</span><span class="p">,</span> <span class="n">seed</span><span class="o">=</span><span class="mi">123</span><span class="p">)</span>
</pre></div>
</div>
</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">
<p>Notemos:</p>
<ul>
<li>Usamos la función <code>nx.relabel_nodes()</code> para renombrar etiquetas, la información se propaga en el grafo. Es necesario proveer el diccionario de remapeo de etiquetas.</li>
<li>Esto es útil cuando construimos a partir de un array de Numpy y queremos renombrar las etiquetas.</li>
</ul>
</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">
<p>Desplegamos el grafo original con etiquetas:</p>
</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In [10]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
<div class="cm-editor cm-s-jupyter">
<div class="highlight hl-ipython3"><pre><span></span><span class="c1"># Graficamos G</span>
<span class="n">nx</span><span class="o">.</span><span class="n">draw</span><span class="p">(</span>
    <span class="n">G_from_matrix</span><span class="p">,</span>
    <span class="n">pos_G</span><span class="p">,</span>
    <span class="n">with_labels</span><span class="o">=</span><span class="kc">True</span><span class="p">,</span>
    <span class="n">node_color</span><span class="o">=</span><span class="s2">"tomato"</span><span class="p">,</span>
    <span class="n">edge_color</span><span class="o">=</span><span class="s2">"gray"</span>
<span class="p">)</span>
</pre></div>
</div>
</div>
</div>
</div>
<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>
<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child">
<div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
<div class="jp-RenderedImage jp-OutputArea-output" tabindex="0">
<img alt="No description has been provided for this image" class="" src="data:image/png;base64,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
"/>
</div>
</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">
<p>Desplegamos el grafo con nuevas etiquetas:</p>
</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In [11]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
<div class="cm-editor cm-s-jupyter">
<div class="highlight hl-ipython3"><pre><span></span><span class="c1"># Graficamos H</span>
<span class="n">nx</span><span class="o">.</span><span class="n">draw</span><span class="p">(</span>
    <span class="n">H</span><span class="p">,</span>
    <span class="n">pos_H</span><span class="p">,</span>
    <span class="n">with_labels</span><span class="o">=</span><span class="kc">True</span><span class="p">,</span>
    <span class="n">node_color</span><span class="o">=</span><span class="s2">"tomato"</span><span class="p">,</span>
    <span class="n">edge_color</span><span class="o">=</span><span class="s2">"gray"</span>
<span class="p">)</span>
</pre></div>
</div>
</div>
</div>
</div>
<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>
<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child">
<div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
<div class="jp-RenderedImage jp-OutputArea-output" tabindex="0">
<img alt="No description has been provided for this image" class="" src="data:image/png;base64,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
"/>
</div>
</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">
<h3 id="Avanzado:-Asignar-posiciones-a-los-nodos."><strong>Avanzado:</strong> Asignar posiciones a los nodos.<a class="anchor-link" href="#Avanzado:-Asignar-posiciones-a-los-nodos.">¶</a></h3>
</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In [12]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
<div class="cm-editor cm-s-jupyter">
<div class="highlight hl-ipython3"><pre><span></span><span class="kn">from</span><span class="w"> </span><span class="nn">pprint</span><span class="w"> </span><span class="kn">import</span> <span class="n">pprint</span>

<span class="c1"># Se puede obtener una representaicón plana</span>
<span class="n">pos</span> <span class="o">=</span> <span class="n">nx</span><span class="o">.</span><span class="n">planar_layout</span><span class="p">(</span><span class="n">H</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"Diccionario de posiciones:"</span><span class="p">)</span>
<span class="n">pprint</span><span class="p">(</span><span class="n">pos</span><span class="p">)</span>

<span class="c1"># Desplegamos representación plana con posiciones dadas</span>
<span class="n">nx</span><span class="o">.</span><span class="n">draw</span><span class="p">(</span><span class="n">H</span><span class="p">,</span> <span class="n">pos</span><span class="p">)</span>
</pre></div>
</div>
</div>
</div>
</div>
<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>
<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child">
<div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
<div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain" tabindex="0">
<pre>Diccionario de posiciones:
{'A': array([-1.        , -0.33333333]),
 'B': array([ 0.77777778, -0.33333333]),
 'C': array([0.33333333, 0.11111111]),
 'D': array([-0.11111111,  0.55555556])}
</pre>
</div>
</div>
<div class="jp-OutputArea-child">
<div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
<div class="jp-RenderedImage jp-OutputArea-output" tabindex="0">
<img alt="No description has been provided for this image" class="" src="data:image/png;base64,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
"/>
</div>
</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">
<p>Como hemos visto, al usar la función <code>nx.planar_layout()</code> o <code>nx.spring_layout()</code> se genera un diccionario de pocisiones fijas (aleatorias).</p>
<p>Lo importante de aquí es notar la estructura de las pocisiones, puesto que es el parámetro que nos interesa modificar.</p>
<p>En este caso, observamos que la estructura es un diccionario:</p>
<pre><code>{'A': array([-1.        , -0.33333333]),
 'B': array([ 0.77777778, -0.33333333]),
 'C': array([0.33333333, 0.11111111]),
 'D': array([-0.11111111,  0.55555556])}
</code></pre>
<p>Por lo que podemos crear una estructura similar con las pocisiones deseadas.</p>
</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">
<p>Creamos un nuevo grafo y aplicamos todo:</p>
<ol>
<li>Redefinimos los nombres de las etiquetas en los nodos.</li>
<li>Modificamos las pocisiones en los mismos.</li>
</ol>
</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In [13]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
<div class="cm-editor cm-s-jupyter">
<div class="highlight hl-ipython3"><pre><span></span><span class="c1"># Con la estructura anterior se pueden especificar</span>
<span class="c1"># las posiciones (x, y) de los nodos en un grafo</span>

<span class="c1"># Crear una matriz de adyacencia</span>
<span class="n">adj_matrix</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">([</span>
    <span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">6</span><span class="p">,</span> <span class="mi">4</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">],</span>
    <span class="p">[</span><span class="mi">6</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">],</span>
    <span class="p">[</span><span class="mi">4</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">0</span><span class="p">],</span>
    <span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">7</span><span class="p">],</span>
    <span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">3</span><span class="p">],</span>
    <span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">7</span><span class="p">,</span> <span class="mi">3</span><span class="p">,</span> <span class="mi">0</span><span class="p">]</span>
<span class="p">])</span>

<span class="c1"># Crear un grafo desde la matriz de adyacencia</span>
<span class="n">G</span> <span class="o">=</span> <span class="n">nx</span><span class="o">.</span><span class="n">from_numpy_array</span><span class="p">(</span><span class="n">adj_matrix</span><span class="p">)</span>

<span class="c1"># Aplicamos remapeo de etiquetas</span>
<span class="n">mapping</span> <span class="o">=</span> <span class="p">{</span><span class="n">item</span><span class="p">:</span> <span class="n">item</span> <span class="o">+</span> <span class="mi">1</span> <span class="k">for</span> <span class="n">item</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">7</span><span class="p">)}</span>
<span class="n">G</span> <span class="o">=</span> <span class="n">nx</span><span class="o">.</span><span class="n">relabel_nodes</span><span class="p">(</span><span class="n">G</span><span class="p">,</span> <span class="n">mapping</span><span class="p">)</span>

<span class="c1"># Desplegamos G antes del repocisionamiento</span>
<span class="n">nx</span><span class="o">.</span><span class="n">draw</span><span class="p">(</span><span class="n">G</span><span class="p">,</span> <span class="n">with_labels</span><span class="o">=</span><span class="kc">True</span><span class="p">,</span> <span class="n">node_color</span><span class="o">=</span><span class="s2">"tomato"</span><span class="p">,</span> <span class="n">edge_color</span><span class="o">=</span><span class="s2">"gray"</span><span class="p">)</span>
</pre></div>
</div>
</div>
</div>
</div>
<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>
<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child">
<div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
<div class="jp-RenderedImage jp-OutputArea-output" tabindex="0">
<img alt="No description has been provided for this image" class="" src="data:image/png;base64,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KRN48mUgIHhxMlkYFkoiIiKyOtPT02hqaoJOp0NjYyOmp6fh7++PpKQkqFQqBAUFLcyDMiXHgP37AKMRMBnn/nFSGSCTAXu+D+RunX8OC8dCSURERFbNYDCgubkZOp0ODQ0NmJychK+vr3nkMiQk5MHK5eH9QOG78w+4+2lgx575X8eCsVASERGRzTAajWhtbUVdXR3q6+sxMTEBb29vc7kMDw+fW7ksOQa89/rCBXv6FWDNloW7noVhoSQiIiKbZDKZ0NbWZt6OaGxsDJ6enlAqlUhKSkJkZKR5c/JZ+q4C//Q8oJ++7XVH9Qb8R00bvuwdRGnfEAamDfj1mhQ8kxB25zCOTsA/v22zaypZKImIiMjmmUwmdHR0mEcuh4eH4e7ubi6XUVFRkMlkM29+7YdAvfaOaybbRiYQ82EJIt1doPByRVH3wL0LpVQGKNXAqz9ahM9OfCyUREREZFcEQUBnZ6f5fPHBwUG4uroiMTER6YFyRL1z99I3ZTRhYEqPYDdnlPUNYdnB8/culDf889tAaOQCfSaWgyflEBERkV2RSCQIDw9HeHg4Nm7ciKtXr6Kurg51dXUI/uJjRAC4zUS4mbNMimA35/u/sVQKFB0GnnjpQaNbLBZKIiIislsSiQQhISEICQnBunXrYPzfT9+1TM6LyQTUli3W1UW1aF8zIiIiImsimZqAQ3/v4t6ktwuYnFjce4iAhZKIiIgIAHpvc5ziotyna2nus4RYKImIiIgAwKC3rfssIRZKIiIiIgBwcLSt+ywhFkoiIiIiAAgMta37LCEWSiIiIiIAcHEFAkIW9x6BoTP3sTHcNoiIiIjohtRlM3tFmkx3fdvP69oxOGVA1/gUAOBQRy+ujE0CAP4qORLeTreZ1pZKgZSsBY9sCXhSDhEREdENXe3AP71wz7dF/74Y7aOTt32t9bFcRHveYRSSJ+UQERER2bjQKCAp865neQNA2+N593fdG2d522CZBLiGkoiIiGi2J18GZLKFvaZMNnNdG8VCSURERPRVAcHAnu8v7DWfeGnmujaKhZKIiIjo63K3ArufXphrPfQMsGbLwlzLQvGhHCIiIqI7KTkG7N8HGI13XVN5C6lsZpr7iZdsvkwCLJREREREd9d3FXj/DaCuYmbrn7ttKXTj9aTMmTWTNjzN/VUslERERERz0dUOFB0BasuA3q5bXw8MndlnMn+HzT7NfScslERERET3a3JiplQa9DNnc9voCThzxUJJRERERPPCp7yJiIiIaF5YKImIiIhoXlgoiYiIiGheWCiJiIiIaF5YKImIiIhoXlgoiYiIiGheWCiJiIiIaF5YKImIiIhoXlgoiYiIiGheWCiJiIiIaF5YKImIiIhoXlgoiYiIiGheWCiJiIiIaF5YKImIiIhoXlgoiYiIiGheWCiJiIiIaF5YKImIiIhoXlgoiYiIiGheWCiJiIiIaF5YKImIiIhoXlgoiYiIiGheWCiJiIiIaF5YKImIiIhoXlgoiYiIiGheWCiJiIiIaF5YKImIiIhoXlgoiYiIiGheWCiJiIiIaF5YKImIiIhoXlgoiYiIiGheWCiJiIiIaF5YKImIiIhoXlgoiYiIiGheWCiJiIiIaF5YKImIiIhoXlgoiYiIiGheWCiJiIiIaF7+f93u9C6iuiSvAAAAAElFTkSuQmCC
"/>
</div>
</div>
</div>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In [14]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
<div class="cm-editor cm-s-jupyter">
<div class="highlight hl-ipython3"><pre><span></span><span class="c1"># Ajustamos posiciones</span>
<span class="n">pos</span> <span class="o">=</span> <span class="p">{</span>
    <span class="mi">1</span><span class="p">:</span> <span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">([</span><span class="o">-</span><span class="mf">1.5</span><span class="p">,</span> <span class="mf">0.5</span><span class="p">]),</span>
    <span class="mi">2</span><span class="p">:</span> <span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">([</span> <span class="mf">0.0</span><span class="p">,</span> <span class="mf">0.0</span><span class="p">]),</span>
    <span class="mi">3</span><span class="p">:</span> <span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">([</span> <span class="mf">0.0</span><span class="p">,</span> <span class="mf">1.0</span><span class="p">]),</span>
    <span class="mi">4</span><span class="p">:</span> <span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">([</span> <span class="mf">3.0</span><span class="p">,</span> <span class="mf">0.0</span><span class="p">]),</span>
    <span class="mi">5</span><span class="p">:</span> <span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">([</span> <span class="mf">3.0</span><span class="p">,</span> <span class="mf">1.0</span><span class="p">]),</span>
    <span class="mi">6</span><span class="p">:</span> <span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">([</span> <span class="mf">4.5</span><span class="p">,</span> <span class="mf">0.5</span><span class="p">]),</span>
<span class="p">}</span>

<span class="c1"># Desplegamos G con posiciones</span>
<span class="n">plt</span><span class="o">.</span><span class="n">figure</span><span class="p">(</span><span class="n">figsize</span><span class="o">=</span><span class="p">(</span><span class="mi">3</span><span class="p">,</span> <span class="mi">2</span><span class="p">),</span> <span class="n">dpi</span><span class="o">=</span><span class="mi">300</span><span class="p">)</span>
<span class="n">nx</span><span class="o">.</span><span class="n">draw</span><span class="p">(</span><span class="n">G</span><span class="p">,</span> <span class="n">pos</span><span class="p">,</span> <span class="n">with_labels</span><span class="o">=</span><span class="kc">True</span><span class="p">,</span> <span class="n">node_color</span><span class="o">=</span><span class="s2">"lightgreen"</span><span class="p">,</span> <span class="n">edge_color</span><span class="o">=</span><span class="s2">"gray"</span><span class="p">)</span>

<span class="c1"># Agregamos etiquetas a las aristas</span>
<span class="n">labels</span> <span class="o">=</span> <span class="n">nx</span><span class="o">.</span><span class="n">get_edge_attributes</span><span class="p">(</span><span class="n">G</span><span class="p">,</span> <span class="s2">"weight"</span><span class="p">)</span>
<span class="n">nx</span><span class="o">.</span><span class="n">draw_networkx_edge_labels</span><span class="p">(</span><span class="n">G</span><span class="p">,</span> <span class="n">pos</span><span class="p">,</span> <span class="n">edge_labels</span><span class="o">=</span><span class="n">labels</span><span class="p">);</span>
</pre></div>
</div>
</div>
</div>
</div>
<div class="jp-Cell-outputWrapper">
<div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">
</div>
<div class="jp-OutputArea jp-Cell-outputArea">
<div class="jp-OutputArea-child">
<div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
<div class="jp-RenderedImage jp-OutputArea-output" tabindex="0">
<img alt="No description has been provided for this image" class="" src="data:image/png;base64,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Vvfccw/bSZHQyAMDQHKaMWOG+vTpow8++KDRZ2NrG9ixY8fq2muvDY+/+uqr+vGPf6wpU6Zo165d8vv9kqSnnnpKv/nNb7RixQq53e7w+FlnnSWJi4LCXmiA4Rgul0utW7fWTTfdJI/Ho8rKSj3zzDOS9k/srVq10rXXXqsXX3xR5513XsSW6NqrRA8bNkx79+7Vtm3bNH78eEn7tw4tWLBApaWlVn55wGGRBwaA5DJ79myNGDFCpaWlWrx4sRYuXNio5xmGEW5a//CHP6hz586S9q+FVq5cqWuvvVannXaahg4dqp49e+qWW27RggULVFNTE455XXTRRfrVr34Vfh5gF/w0w3FOPfXUcK5l4cKF2rhxY3hi9/l8OuusszRx4kTddtttkiK3RM+ePVv5+fkaMGBA+PU6d+6sBx98UO3bt4//FwM0EXlgAEgezZs3V/fu3WWaplJSUrR06dJGX4ekdm3TunVrjRo1SoZhKBgMyufzSZK++eYbLVy4UF9//bVSUlLC8S7DMHT55Zfrt7/9rSSuewL7oQGG45x55pkaOnSoJGnz5s167733JH2/vccwDHXv3l333ntvnS3RKSkpKioq0saNG8OPvf/++3XKKafw7iiSBnlgAEgOxx57rLp06SJJ2rdvn959990m35LI5/OpR48eMk1T6enpuuyyy3T22WcrOzs7/MZn7Znf9u3b6+abb9YvfvELnXzyyZIUbowBu2DFDke6/PLLw/+eNGmSqqqq6jzmwC3RtVeJPvBiV4ZhKDc3Vz179gznKnmXFMmAPDAAJD7TNNWqVSv96Ec/krR/7p4zZ46mTJkiqXG53NoG95xzzlFmZqb27duniooKvfHGG5o7d65+97vf6eqrr9bYsWN1++2366233tK9996rM844I+L5gJ3QAMORBg4cqDZt2kiSvvzyS23YsKHeM7g+n0+nnXaaXn31VV1zzTWSFPHOa3FxsUaNGhW+SrTb7aYJRlIgDwwAia12fr7yyit10UUXhZvR3/3udyoqKgpf7bkxr7F582ZVVFTIMAy98847WrdunU444QTde++9evnll/X888/r0Ucf1YABA5SdnV3n+YCd0ADDkY477jiNHDlSkrRz5049/vjjMk2zzh+SQCAgn8+nVq1a6ZNPPpEU+W7ogVeJ/r//+z9J+5tgrpaIZEAeGACSw8033xy+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
"/>
</div>
</div>
</div>
</div>
</div>
<div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">
<div class="jp-Cell-inputWrapper" tabindex="0">
<div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">
</div>
<div class="jp-InputArea jp-Cell-inputArea"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">
<hr/>
</div>
</div>
</div>
</div>
</main>
</body>
</html>
