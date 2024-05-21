declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.png" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.env" {
  const content: { [className: string]: string };
  export default content;
}

// declare module '*.module.css' {
//   const classes: { [key: string]: string };
//   export default classes;
// }