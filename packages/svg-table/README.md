# svg-table

! ⚠️ This library is no longer increasing version. But it will be continue with @shjeon0730/svg-table-react. Checkout [Migration](#migration) ⚠️

![Logo](https://raw.githubusercontent.com/wootra/svg-table/main/packages/svg-table/logo.svg)

! ⚠️ This library is separated 3 libraries (maybe more in the future) to support multiple frameworks. (i.e. `@shjeon0730/svg-table-react`, `@shjeon0730/svg-table-rsolid`, and `@shjeon0730/svg-table-vanilla`). Check out [Homepage](https://svg-table.com) for more information. ⚠️



## Introduction

`@shjeon0730/svg-table` library is made to support a case that HTML table cannot be used but svg is needed.
I realized that creating a table form in SVG is a tedious job, so created this library to make the table shape in SVG easier and manageable.
Especially, if you want to use PDFMake and want to create more advanced table like experience in the PDF, it is a time consuming process.
If you can make the table with SVG and reuse the same code for both browser and PDF, it will be easier to manage.

## Migration

### Backward compatibility (for `@shjeon0730/svg-table` users)

`@shjeon0730/svg-table@2.1.x` will be the last version of this library. 
But you can continue upgrade it by installing `@shjeon0730/svg-table-react` since it will be used in `@shjeon0730/svg-table@2.1.x` as a peerDependency.
all Logic is ported to turbo-repo's internal package `@shjeon0730/svg-table-core` and it will not be published to avoid version mismatch among the other framework's version like `@shjeon0730/svg-table-solid` or `@shjeon0730/svg-table-vanilla`.
They will use the same core logic and will have the same version systems (except for pre-patch version).

### How to migrate to @shjeon0730/svg-table-react

For your convenience, We give you a simple way of upgrading library.

1. install `@shjeon0730/svg-table-core` and `@shjeon0730/svg-table-react`

```sh
npm install @shjeon0730/svg-table-core @shjeon0730/svg-table-react
```

2. update @shjeon0730/svg-table@2.1

```sh
npm install @shjeon0730/svg-table@2.1
```

That's it! you can continue upgrading svg tble by upgrading `@shjeon0730/svg-table-react`.
But I recomment you to remove `@shjeon0730/svg-table` and replace it to `@shjeon0730/svg-table-react` if possible to reduce the complexity.

## Usage

Please visit [Homepage](https://svg-table.com/) for more information as well as demo

## Support

For support, questions, or to report issues related to the SVG Table Component, please use the GitHub [Issues page](https://github.com/wootra/svg-table/issues) of the Turborepo project.

## License

The SVG Table Component is MIT License.
