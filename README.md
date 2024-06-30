# SVG Table Component Documentation

## Overview

The SVG Table Component is a versatile, TypeScript-based component designed for rendering tables using Scalable Vector Graphics (SVG). It is part of the larger Turborepo project, which includes a variety of applications and packages aimed at providing a comprehensive development ecosystem.

## Installation

Before you begin, ensure that your development environment is set up according to the Turborepo starter guide. The SVG Table Component is located within the `packages/svg-table` directory of the Turborepo.

To get started with the SVG Table Component:

1. Clone the Turborepo project to your local machine.
2. Navigate to the root directory of the Turborepo and run `pnpm install` to install all necessary dependencies.

## Usage

To use the SVG Table Component in your application, import it from the `@repo/svg-table` package:

```typescript
import SVGTable from '@repo/svg-table';
```

Next, define the properties for your table, including rows, column widths, and any default styles:

```typescript
const tableProps = {
  // Example properties
  width: 600,
  rows: [
    // Define your rows and cells here
  ],
  columnWidths: [100, 200, 300],
  defaultCellStyle: {
    // Default cell styles
  },
  style: {
    // Table-wide styles
  },
};

<SVGTable {...tableProps} />
```

## Component API

### Props

- rows: An array of row objects, each containing cell data and optional styling.
- width: The total width of the SVG table.
- columnWidths: An optional array specifying the width of each column.
- defaultCellStyle: Default styling applied to all cells, unless overridden by - individual cell styles.
- defaultRowStyle: Default styling applied to all rows.
- style: Additional styling options for the overall table layout.

### Interfaces

- TableProps: Describes the complete set of properties accepted by the SVGTable - component.
- CellProps: Describes the properties and styling options for individual table - cells.
- RowProps: Describes the properties and styling options for table rows.
- CellStyle: Describes the styling options available for cells.
- RowStyle: Describes the styling options available for rows.
- TableStyle: Describes the styling options available for the overall table.

### Development

To contribute to the SVG Table Component or to modify it for your purposes:

1.Navigate to the packages/svg-table directory.
2.Make your changes to the component's source code.
3.Use pnpm dev to test your changes in a development environment.

### Support

For support, questions, or to report issues related to the SVG Table Component, please use the GitHub Issues page of the Turborepo project.

### License

The SVG Table Component is MIT License.
