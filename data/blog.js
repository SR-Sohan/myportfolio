// data/blog.js
export const blogs = [
    {
      id: 1,
      title: "Exploring JavaScript",
      image: "/images/js-blog.jpg",
      shortDes: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      description: `
        <p>This blog covers some fundamental JavaScript concepts.</p>
        <pre><code>console.log('Hello, World!');</code></pre>
        <p>Logging messages to the console is one of the first steps in debugging.</p>
        <img src="/img/ab2.webp" alt="Sample Image" class="rounded-lg shadow-lg my-4" />
        <p>This is a useful image to illustrate the concept.</p>
        <pre><code>const greet = name => \`Hello, \${name}!\`;</code></pre>
        <p>Using template literals makes it easy to construct strings.</p>
        <pre><code>document.addEventListener('click', () => console.log('Clicked!'));</code></pre>
        <p>Event listeners are crucial for interactive applications.</p>
        <p>Feel free to copy the commands above and experiment!</p>
      `,
    },
    {
      id: 2,
      title: "Understanding CSS",
      image: "/images/css-blog.jpg",
      shortDes: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      description: `
        <p>CSS is the language of styling in web development.</p>
        <pre><code>body { background-color: lightblue; }</code></pre>
        <p>Setting a background color is one of the first things you might do.</p>
        <img src="/img/ab2.webp" alt="CSS Example" class="rounded-lg shadow-lg my-4" />
        <p>Here's an example of how a simple CSS file might look.</p>
        <pre><code>h1 { color: navy; }</code></pre>
        <p>Headings are essential for structuring your content.</p>
        <pre><code>p { font-size: 16px; }</code></pre>
        <p>Adjusting font sizes helps improve readability.</p>
      `,
    },
    // Additional blog data...
  ];
  