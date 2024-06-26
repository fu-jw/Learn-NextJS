const BlogLayout = ({ children }) => {
  return (
    <div>
      <h2>这是BlogLayout,只出现在该blog路由下</h2>
      { children }
    </div>
  );
};

export default BlogLayout;