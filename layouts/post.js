import react from 'react';
const Layout = (frontMatter) => ({ children: content }) => (
  <div>
    <h1>{frontMatter.title} - Posties</h1>
    {content}
  </div>
);
export default Layout;