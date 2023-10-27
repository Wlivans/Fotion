module.exports = {
  // 基础配置
  singleQuote: false, // 使用双引号
  printWidth: 80, // 设置行宽度为100，稍微宽一点可能更适合现代屏幕
  semi: true, // 使用分号
  trailingComma: "all", // 在多行输入的尾逗号处添加一个逗号

  // TypeScript相关配置
  arrowParens: "always", // 箭头函数参数始终使用括号，有助于代码清晰
  bracketSpacing: true, // 在对象字面量声明所使用的的大括号内部添加空格

  // 与编辑器和其他工具集成
  useTabs: false, // 使用空格替代Tab
  tabWidth: 2, // 设置tab宽度为2

  // 其他配置
  proseWrap: "always", // 总是折行，适用于Markdown等
  htmlWhitespaceSensitivity: "css", // 尊重CSS中的空白字符
  plugins: ["prettier-plugin-tailwindcss"],
}
