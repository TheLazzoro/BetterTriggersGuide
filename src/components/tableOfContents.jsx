import React, { useEffect, useState } from 'react'
import './tableOfContents.css'

export const TableOfContents = (props) => {
  const { nestedHeadings } = useHeadingsData();

  return (
    <nav className='tocnav'>
      <Headings headings={nestedHeadings} />
    </nav>
  )
}

const Headings = ({ headings }) => (
  <ul>
    {headings.map((heading) => (
      <li key={heading.id}>
        <a href={`#${heading.id}`}
          onClick={(e) => {
            e.preventDefault();
            const element = document.querySelector(`#${heading.id}`)
            ScrollIntoViewExt(element);
          }}
        >{heading.title}</a>
        {heading.items.length > 0 && ( // render nested headings
          <ul>
            {heading.items.map((child) => (
              <li key={child.id}>
                <a href={`#${child.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(`#${child.id}`);
                    ScrollIntoViewExt(element);
                  }}
                >{child.title}</a>
              </li>
            ))}
          </ul>
        )}
      </li>
    ))}
  </ul>
);

const ScrollIntoViewExt = (element) => {
  var headerOffset = 45;
  var elementPosition = element.getBoundingClientRect().top;
  var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  });
}

const useHeadingsData = () => {
  const [nestedHeadings, setNestedHeadings] = useState([]);

  useEffect(() => {
    const headingElements = Array.from(
      document.querySelectorAll("h2, h3")
    );

    const newNestedHeadings = getNestedHeadings(headingElements);
    setNestedHeadings(newNestedHeadings);
  }, []);

  return { nestedHeadings };
};

// Puts H3 elements as children of the last H2 element.
const getNestedHeadings = (headingElements) => {
  const nestedHeadings = [];

  headingElements.forEach((heading, index) => {
    const { innerText: title, id } = heading;

    if (heading.nodeName === "H2") {
      nestedHeadings.push({ id, title, items: [] });
    } else if (heading.nodeName === "H3" && nestedHeadings.length > 0) {
      nestedHeadings[nestedHeadings.length - 1].items.push({
        id,
        title,
      });
    }
  });

  return nestedHeadings;
};
