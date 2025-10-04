# React Lists and the map() Method

## Overview
In React, you render lists by transforming arrays of data into arrays of JSX elements. The `map()` method is the preferred way to accomplish this, as it creates a new array of elements while maintaining immutability.

---

## Why Use map() for Lists?

The `map()` method is ideal because:
- It returns a new array (React principle: immutability)
- It's declarative and readable
- It naturally fits React's component-based architecture
- It allows you to transform data into JSX elements

---

## Basic Syntax

```jsx
const App = () => {
  const numbers = [1, 2, 3, 4, 5];
  
  return (
    <main>
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </main>
  );
}
```

### Breaking Down the Syntax

```jsx
array.map((item, index) => (
  <JSXElement key={uniqueValue}>
    {item}
  </JSXElement>
))
```

- **item**: Current element being processed
- **index**: Index of the current element (0, 1, 2, ...)
- **key**: Unique identifier for each element (required!)

---

## The Key Prop - CRITICAL!

### ❌ Bad Practice: Using Math.random()
```jsx
const App = () => {
  const numbers = [1, 2, 3, 4, 5];
  
  return (
    <ul>
      {numbers.map((num, index) => (
        <li key={Math.random()}>{num}</li>
      ))}
    </ul>
  );
}
```

**Why this is wrong:**
- `Math.random()` generates a new key on every render
- React can't track which items changed
- Causes performance issues and bugs
- May reset component state unexpectedly

### ⚠️ Acceptable: Using Index (with caveats)
```jsx
const App = () => {
  const numbers = [1, 2, 3, 4, 5];
  
  return (
    <ul>
      {numbers.map((num, index) => (
        <li key={index}>{num}</li>
      ))}
    </ul>
  );
}
```

**When index is okay:**
- List items don't have unique IDs
- List is static (never reordered, filtered, or modified)
- Items don't have internal state

**When NOT to use index:**
- Items can be reordered
- Items can be deleted or inserted
- Items have interactive elements or state

### ✅ Best Practice: Using Unique IDs
```jsx
const App = () => {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ];
  
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

---

## Practical Examples

### Example 1: Simple Number List
```jsx
const NumberList = () => {
  const numbers = [10, 20, 30, 40, 50];
  
  return (
    <div>
      <h2>Number List</h2>
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>Number: {num}</li>
        ))}
      </ul>
    </div>
  );
}
```

### Example 2: Object Array - User Cards
```jsx
const UserList = () => {
  const users = [
    { id: 101, name: 'John Doe', age: 28, email: 'john@example.com' },
    { id: 102, name: 'Jane Smith', age: 32, email: 'jane@example.com' },
    { id: 103, name: 'Mike Johnson', age: 45, email: 'mike@example.com' }
  ];
  
  return (
    <div className="user-container">
      <h1>Our Users</h1>
      {users.map((user) => (
        <div key={user.id} className="user-card">
          <h3>{user.name}</h3>
          <p>Age: {user.age}</p>
          <p>Email: {user.email}</p>
        </div>
      ))}
    </div>
  );
}
```

### Example 3: Product List with Prices
```jsx
const ProductList = () => {
  const products = [
    { id: 'p1', name: 'Laptop', price: 999, inStock: true },
    { id: 'p2', name: 'Mouse', price: 25, inStock: true },
    { id: 'p3', name: 'Keyboard', price: 75, inStock: false },
    { id: 'p4', name: 'Monitor', price: 300, inStock: true }
  ];
  
  return (
    <div className="product-list">
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <h4>{product.name}</h4>
          <p>Price: ${product.price}</p>
          <span className={product.inStock ? 'in-stock' : 'out-of-stock'}>
            {product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
          </span>
        </div>
      ))}
    </div>
  );
}
```

### Example 4: Nested Lists - Categories with Items
```jsx
const CategoryList = () => {
  const categories = [
    {
      id: 'cat1',
      name: 'Fruits',
      items: ['Apple', 'Banana', 'Orange']
    },
    {
      id: 'cat2',
      name: 'Vegetables',
      items: ['Carrot', 'Broccoli', 'Spinach']
    },
    {
      id: 'cat3',
      name: 'Dairy',
      items: ['Milk', 'Cheese', 'Yogurt']
    }
  ];
  
  return (
    <div>
      <h1>Grocery Categories</h1>
      {categories.map((category) => (
        <div key={category.id} className="category">
          <h2>{category.name}</h2>
          <ul>
            {category.items.map((item, index) => (
              <li key={`${category.id}-${index}`}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
```

### Example 5: Dynamic Buttons List
```jsx
const ButtonList = () => {
  const actions = [
    { id: 'btn1', label: 'Save', color: 'green' },
    { id: 'btn2', label: 'Delete', color: 'red' },
    { id: 'btn3', label: 'Edit', color: 'blue' },
    { id: 'btn4', label: 'Cancel', color: 'gray' }
  ];
  
  const handleClick = (label) => {
    alert(`${label} button clicked!`);
  };
  
  return (
    <div className="button-container">
      {actions.map((action) => (
        <button
          key={action.id}
          onClick={() => handleClick(action.label)}
          style={{ backgroundColor: action.color, color: 'white' }}
        >
          {action.label}
        </button>
      ))}
    </div>
  );
}
```

### Example 6: Todo List with Checkboxes
```jsx
const TodoList = () => {
  const todos = [
    { id: 't1', task: 'Buy groceries', completed: false },
    { id: 't2', task: 'Walk the dog', completed: true },
    { id: 't3', task: 'Finish homework', completed: false },
    { id: 't4', task: 'Call mom', completed: true }
  ];
  
  return (
    <div>
      <h2>My Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" defaultChecked={todo.completed} />
            <span style={{ 
              textDecoration: todo.completed ? 'line-through' : 'none',
              marginLeft: '10px'
            }}>
              {todo.task}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

### Example 7: Image Gallery
```jsx
const ImageGallery = () => {
  const images = [
    { id: 'img1', url: 'https://picsum.photos/200/200?random=1', alt: 'Random 1' },
    { id: 'img2', url: 'https://picsum.photos/200/200?random=2', alt: 'Random 2' },
    { id: 'img3', url: 'https://picsum.photos/200/200?random=3', alt: 'Random 3' },
    { id: 'img4', url: 'https://picsum.photos/200/200?random=4', alt: 'Random 4' }
  ];
  
  return (
    <div className="gallery">
      <h2>Photo Gallery</h2>
      <div className="gallery-grid">
        {images.map((image) => (
          <img 
            key={image.id} 
            src={image.url} 
            alt={image.alt}
            className="gallery-image"
          />
        ))}
      </div>
    </div>
  );
}
```

### Example 8: Table Rows
```jsx
const StudentTable = () => {
  const students = [
    { id: 's1', name: 'Emma Wilson', grade: 'A', score: 95 },
    { id: 's2', name: 'Liam Brown', grade: 'B', score: 87 },
    { id: 's3', name: 'Olivia Davis', grade: 'A', score: 92 },
    { id: 's4', name: 'Noah Martinez', grade: 'C', score: 78 }
  ];
  
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Grade</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td>{student.name}</td>
            <td>{student.grade}</td>
            <td>{student.score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
```

---

## Common Patterns

### Filtering Before Mapping
```jsx
const FilteredList = () => {
  const products = [
    { id: 1, name: 'Laptop', price: 999, inStock: true },
    { id: 2, name: 'Mouse', price: 25, inStock: false },
    { id: 3, name: 'Keyboard', price: 75, inStock: true }
  ];
  
  return (
    <ul>
      {products
        .filter((product) => product.inStock)
        .map((product) => (
          <li key={product.id}>{product.name} - ${product.price}</li>
        ))}
    </ul>
  );
}
```

### Sorting Before Mapping
```jsx
const SortedList = () => {
  const scores = [
    { id: 1, player: 'Alice', score: 87 },
    { id: 2, player: 'Bob', score: 95 },
    { id: 3, player: 'Charlie', score: 72 }
  ];
  
  return (
    <ul>
      {scores
        .sort((a, b) => b.score - a.score)
        .map((item) => (
          <li key={item.id}>{item.player}: {item.score}</li>
        ))}
    </ul>
  );
}
```

### Conditional Rendering in Lists
```jsx
const ConditionalList = () => {
  const items = [
    { id: 1, name: 'Item 1', featured: true },
    { id: 2, name: 'Item 2', featured: false },
    { id: 3, name: 'Item 3', featured: true }
  ];
  
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.name}
          {item.featured && <span> ⭐ Featured</span>}
        </li>
      ))}
    </ul>
  );
}
```

---

## Common Mistakes to Avoid

### ❌ Mistake 1: Forgetting the key prop
```jsx
// DON'T DO THIS
{items.map((item) => (
  <div>{item.name}</div>
))}
```

### ❌ Mistake 2: Using non-unique keys
```jsx
// DON'T DO THIS
{items.map((item) => (
  <div key="same-key">{item.name}</div>
))}
```

### ❌ Mistake 3: Using Math.random() for keys
```jsx
// DON'T DO THIS
{items.map((item) => (
  <div key={Math.random()}>{item.name}</div>
))}
```

### ❌ Mistake 4: Mutating the original array
```jsx
// DON'T DO THIS
const sortedItems = items.sort(); // Mutates original array

// DO THIS INSTEAD
const sortedItems = [...items].sort(); // Creates a copy first
```

---

## Practice Questions

### Question 1: Basic Book List
**Task:** Create a component that displays a list of books. Each book should show its title and author.

**Data:**
```javascript
const books = [
  { id: 1, title: '1984', author: 'George Orwell' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen' }
];
```

**Requirements:**
- Use `map()` to render the list
- Display each book in a `<div>` with the book's title as an `<h3>` and author as a `<p>`
- Use the correct key prop
- Wrap everything in a parent container

---

### Question 2: Movie Ratings
**Task:** Create a component that displays movies with their ratings. Show a "⭐" emoji for each point in the rating.

**Data:**
```javascript
const movies = [
  { id: 'm1', title: 'Inception', rating: 5 },
  { id: 'm2', title: 'The Matrix', rating: 4 },
  { id: 'm3', title: 'Interstellar', rating: 5 },
  { id: 'm4', title: 'Avatar', rating: 3 }
];
```

**Requirements:**
- Use `map()` to render the movie list
- For each movie, display the title and rating stars
- Use nested `map()` to create stars: `Array(rating).fill(0).map()` to render "⭐" rating times
- Each star should have a unique key (hint: use index or combine movie id with star index)

---

### Question 3: Filter and Display
**Task:** Create a component that displays only products that cost more than $50.

**Data:**
```javascript
const products = [
  { id: 'p1', name: 'Headphones', price: 79 },
  { id: 'p2', name: 'USB Cable', price: 12 },
  { id: 'p3', name: 'Laptop Stand', price: 45 },
  { id: 'p4', name: 'Webcam', price: 89 },
  { id: 'p5', name: 'Mouse Pad', price: 15 },
  { id: 'p6', name: 'Mechanical Keyboard', price: 120 }
];
```

**Requirements:**
- Use `.filter()` before `.map()` to show only products over $50
- Display product name and price
- Add a className of "expensive-item" to each product div
- Use proper keys

---

### Question 4: Nested Lists - Comments with Replies
**Task:** Create a component that displays comments, where each comment can have replies.

**Data:**
```javascript
const comments = [
  {
    id: 'c1',
    user: 'Alice',
    text: 'Great article!',
    replies: [
      { id: 'r1', user: 'Bob', text: 'I agree!' },
      { id: 'r2', user: 'Charlie', text: 'Thanks for sharing!' }
    ]
  },
  {
    id: 'c2',
    user: 'David',
    text: 'Very informative',
    replies: [
      { id: 'r3', user: 'Eve', text: 'Learned a lot!' }
    ]
  },
  {
    id: 'c3',
    user: 'Frank',
    text: 'Looking forward to more content',
    replies: []
  }
];
```

**Requirements:**
- Use `map()` to render each comment
- Inside each comment, use another `map()` to render replies
- Display user name and comment text for both comments and replies
- Style replies differently (e.g., add left margin or different background)
- Handle empty replies array gracefully
- Use proper keys for both comments and replies

---

### Question 5: Dynamic Table with Actions
**Task:** Create a component that displays employee data in a table with action buttons for each row.

**Data:**
```javascript
const employees = [
  { id: 'e1', name: 'John Smith', department: 'Engineering', salary: 75000 },
  { id: 'e2', name: 'Sarah Johnson', department: 'Marketing', salary: 65000 },
  { id: 'e3', name: 'Mike Williams', department: 'Sales', salary: 70000 },
  { id: 'e4', name: 'Emily Brown', department: 'Engineering', salary: 80000 }
];
```

**Requirements:**
- Create a table with headers: Name, Department, Salary, Actions
- Use `map()` to render table rows (`<tr>`)
- Each row should have an "Edit" and "Delete" button in the Actions column
- Add `onClick` handlers that log the employee's name and action (e.g., "Edit John Smith")
- Format salary with a dollar sign (e.g., $75,000)
- Use proper keys for table rows

---

## Quick Reference

### Basic map() Structure
```jsx
{array.map((item, index) => (
  <Element key={item.id}>
    {item.property}
  </Element>
))}
```

### Key Prop Priority
1. ✅ **Best**: Unique ID from data (`item.id`)
2. ⚠️ **Acceptable**: Index (only for static lists)
3. ❌ **Never**: `Math.random()` or duplicate values

### Common map() Patterns
- **Simple list**: `array.map(item => <li key={item.id}>{item.name}</li>)`
- **Filter + map**: `array.filter(condition).map(item => <Component key={item.id} />)`
- **Sort + map**: `[...array].sort(compareFn).map(item => <Component key={item.id} />)`
- **Nested map**: `array.map(outer => outer.inner.map(inner => <Element key={inner.id} />))`

---

## Conclusion

The `map()` method is fundamental to React development. Mastering it allows you to efficiently render dynamic lists, create reusable components, and build scalable applications. Always remember to use proper keys, and your lists will perform optimally!