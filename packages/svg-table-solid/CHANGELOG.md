# CHANGELOG
## 3.2.2
- fix: does not render empty g from empty fill area (performance improvement)

## 3.2.1
- fix: multiple rounded table had issue because mask-id was not unique.

## 3.2.0
- add rounded border support
- row's style support border style now. (border widths, colors, and patterns)
  
## 3.1.4
- tsc build config update

## 3.1.3
- fix: row's bgColor was not working.
- update: svg-table-core version 3.0.3

## 3.1.2
- includes svg-table-core as bundle
- svg-table-core version 3.0.2

## 3.0.0
- start consuming svg-table-core
  
## 2.0.0
- before/after API change.

## 1.8.6
- fix: browser incompatibility with rotation content.

## 1.8.5
- make the table accessible by adding role=table, row, cell, aria-colspan, aria-rowspan
- 
## 1.8.4
- fix: path was not properly using css variables.

## 1.8.3
- support CSS variable for the default color.
- add INTERNAL_CSS_VARS object to inform the name of css variable

## 1.8.2
- allow last column to span rest of the columns
- fix rowSpan after colSpan behavior

## 1.8.0
- add standalone functionality.(resize based on HTML container, copy/paste makes standalone svg file.)
- svgAttrs allows the main svg element to be customizable.

## 1.7.2
- simple README.md update

## 1.7.0
- optimization of class generation (default does not create class name)
- cell props will have className props to support in fine level control.

## 1.6.5
- bundled version

## 1.6.0
- add before/after as text in cells.
- add multiline support in cells.

## 1.5.4
- fix nested table padding issue. (bottom padding was not applied)
- console remove
- nested table height dynamic adjustment support.

## 1.5.0
- simple array form support for rows and cells.

## 1.4.0
- make row heights calculated based on table height.

## 1.3.0
- allow nested table to be adjusted in width automatically.
- fix cell padding issue

## 1.2.0 and before

- Turborepo repository
- creating table in svg
- demo code for Vite and Next.js
- cell background and border customization
- colSpan, rowSpan
- table background and border customization
- overflow in cells (default:not allow)
- height in each rows
- automatic column size calculation if columnWidths is not given
- column width calculation based on ratio of columnWidths
- table margin, cell padding support
