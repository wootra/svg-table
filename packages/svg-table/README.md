# svg-table

this library is written in typescript and ESM.
also create the module using React.js.

demo code and the documentations are [here](https://github.com/wootra/svg-table/tree/main/apps/svg-table-demo)

## Introduction

`@shjeon0730/svg-table` library is made to support a case that HTML table cannot be used but svg is needed.
I realized that creating a table form in SVG is a tedious job, so created this library to make the table shape in svg easier and manageable.
Especially, if you want to use PDFMake and want to create more advanced table like experience in the PDF, it is a time consuming process.
If you can make the table with SVG and reuse the same code for both browser and PDF, it will be easier to manage.

this library support below use cases. Please check out the [demo](https://github.com/wootra/svg-table/tree/main/apps/svg-table-demo) code to have more idea of using this library.

### Basic table

simply creating row/cells object and pass it to SVGTable element to create a svg table.

![basic demo](https://raw.githubusercontent.com/wootra/svg-table/main/apps/svg-table-demo/README.assets/basic-demo.png)

### No border Table

you can remove all borders.

![no border table](https://raw.githubusercontent.com/wootra/svg-table/main/apps/svg-table-demo/README.assets/no-border-table.png)

### table border

you can wrap the table with border

![only border around table](https://raw.githubusercontent.com/wootra/svg-table/main/apps/svg-table-demo/README.assets/only-around-table-border.png)

Or you can add margin between table cells and table border

![table border with margin](https://raw.githubusercontent.com/wootra/svg-table/main/apps/svg-table-demo/README.assets/table-border-with-margin.png)

### table border styles

you can customize the shape and color of the borders

![table border with margin](https://raw.githubusercontent.com/wootra/svg-table/main/apps/svg-table-demo/README.assets/table-border-styles.png)

### background and text color change

![table border with margin](https://raw.githubusercontent.com/wootra/svg-table/main/apps/svg-table-demo/README.assets/bgcolor-and-txtcolor.png)

### Gaps between columns and rows

you can easily add gaps between rows or columns.

![table border with margin](https://raw.githubusercontent.com/wootra/svg-table/main/apps/svg-table-demo/README.assets/gaps.png)

### table in table

Since this is just an svg, you can use another svg even svg-table.

![table border with margin](https://raw.githubusercontent.com/wootra/svg-table/main/apps/svg-table-demo/README.assets/embedded-tables.png)

### text override

svg-table has class names for individual elements. so you can add css.
but also, you can control individual text's attributes since the attributes are passed by `style.textStyle` option. All possible attributes can be passed to text elements.

using this behavior, we can override text's position, layout, and much more behavior.

in this example, I just overrode the positions of text.

![text style override](https://raw.githubusercontent.com/wootra/svg-table/main/apps/svg-table-demo/README.assets/text-style-override.png)

### Play with styles even more

you can set more advanced styles on your svg.

by setting `overflow: visible` on the inner svg, we can make the content intentionally overflow.

![text style override](https://raw.githubusercontent.com/wootra/svg-table/main/apps/svg-table-demo/README.assets/table-advanced-styles.png)

## Installation

To get started with the SVG Table Component:

1. install the module by running `pnpm install @shjeon0730/svg-table`.

## Usage

To use the SVG Table Component in your application, import it from the `@shjeon0730/svg-table` package:

```typescript
import SVGTable from '@shjeon0730/svg-table';
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

### Props (TableProps)

- rows: An array of row objects, each containing cell data and optional styling.
- width: The total width of the SVG table.
- columnWidths: An optional array specifying the width RATIO of each column. this value is just RATIOS of columns, so [1,2,1] means the second column has 2x bigger size than the 1st and 3rd columns. You can just pass the anticipated sizes of columns.
- defaultCellStyle: Default styling applied to all cells, unless overridden by - individual cell style.
- defaultRowStyle: Default styling applied to all rows, unless overridden by individual row's style.
- style: the style of `table` level svg. This includes, border, bgColor, margins, colGaps, rowGaps, and additional style for `svg` element for the table.

### Interfaces

- TableProps: Describes the complete set of properties accepted by the SVGTable - component.
- CellProps: Describes the properties and styling options for individual table - cells.
- RowProps: Describes the properties and styling options for table rows.
- CellStyle: Describes the styling options available for cells.
- RowStyle: Describes the styling options available for rows.
- TableStyle: Describes the styling options available for the overall table.

## Development

To contribute to the SVG Table Component or to modify it for your purposes:

1. if you never setup turbo repo environment, please run `pnpm i` in the workspace directory
2. Navigate to the packages/svg-table directory.
3. Make your changes to the component's source code.
4. Navigate to the `apps/svg-table-demo` directory.
5. run `pnpm dev` to run dev server.

## Support

For support, questions, or to report issues related to the SVG Table Component, please use the GitHub [Issues page](https://github.com/wootra/svg-table/issues) of the Turborepo project.

## License

The SVG Table Component is MIT License.
