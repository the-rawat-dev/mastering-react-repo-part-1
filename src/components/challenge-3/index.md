# JSX Rules and Best Practices

## Overview
JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript files. However, it comes with specific rules that differ from standard HTML.

---

## Core JSX Rules

### 1. Single Parent Element Rule
**Every component must return only ONE parent element.**

#### ❌ Incorrect
```jsx
function MyComponent() {
  return (
    <div>First div</div>
    <div>Second div</div>
  );
}
```

#### ✅ Correct
```jsx
function MyComponent() {
  return (
    <div>
      <div>First div</div>
      <div>Second div</div>
    </div>
  );
}
```

#### Alternative: Using React Fragments
```jsx
function MyComponent() {
  return (
    <>
      <div>First div</div>
      <div>Second div</div>
    </>
  );
}
```

**Why?** JSX expressions must return a single root element because the JSX compiler transforms your code into JavaScript function calls, and a function can only return one value.

---

### 2. Self-Closing Tags
**All tags must be properly closed - either with a closing tag or self-closed.**

#### ❌ Incorrect
```jsx
<img src="image.jpg">
<input type="text">
<br>
<hr>
```

#### ✅ Correct
```jsx
<img src="image.jpg" />
<input type="text" />
<br />
<hr />
```

**Why?** Unlike HTML5 which allows some tags to be unclosed, JSX requires XML-style syntax where every tag must be explicitly closed.

**Common self-closing tags:**
- `<img />`
- `<input />`
- `<br />`
- `<hr />`
- `<meta />`
- `<link />`

---

### 3. className Instead of class
**Use `className` instead of the HTML `class` attribute.**

#### ❌ Incorrect
```jsx
<div class="container">
  <p class="text-primary">Hello World</p>
</div>
```

#### ✅ Correct
```jsx
<div className="container">
  <p className="text-primary">Hello World</p>
</div>
```

**Why?** `class` is a reserved keyword in JavaScript (used for ES6 classes). To avoid conflicts, React uses `className` instead.

**Dynamic classes example:**
```jsx
const isActive = true;
<div className={isActive ? "active" : "inactive"}>Content</div>
```

---

### 4. htmlFor Instead of for
**Use `htmlFor` instead of the HTML `for` attribute in labels.**

#### ❌ Incorrect
```jsx
<label for="username">Username:</label>
<input id="username" type="text" />
```

#### ✅ Correct
```jsx
<label htmlFor="username">Username:</label>
<input id="username" type="text" />
```

**Why?** Like `class`, `for` is a reserved keyword in JavaScript (used in for loops). React uses `htmlFor` to avoid conflicts.

**Complete form example:**
```jsx
function LoginForm() {
  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input id="email" type="email" />
      
      <label htmlFor="password">Password:</label>
      <input id="password" type="password" />
      
      <button type="submit">Login</button>
    </form>
  );
}
```

---

## Additional JSX Rules

### 5. camelCase Property Naming
Most HTML attributes become camelCase in JSX.

#### Examples:
```jsx
// HTML: onclick -> JSX: onClick
<button onClick={handleClick}>Click Me</button>

// HTML: onchange -> JSX: onChange
<input onChange={handleChange} />

// HTML: tabindex -> JSX: tabIndex
<div tabIndex="0">Focusable div</div>

// HTML: maxlength -> JSX: maxLength
<input maxLength="10" />
```

### 6. Style Attribute as Object
The `style` attribute accepts a JavaScript object with camelCase properties.

#### ❌ Incorrect
```jsx
<div style="color: red; font-size: 16px;">Text</div>
```

#### ✅ Correct
```jsx
<div style={{ color: 'red', fontSize: '16px' }}>Text</div>
```

### 7. Comments in JSX
Use JavaScript-style comments wrapped in curly braces.

```jsx
function MyComponent() {
  return (
    <div>
      {/* This is a comment in JSX */}
      <p>Content here</p>
    </div>
  );
}
```

---

## Complete Example

Here's a practical example incorporating all the rules:

```jsx
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Contact Us</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            className="form-input"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            className="form-input"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>
        
        <hr />
        
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}
```

---

## Quick Reference Checklist

- ✅ Return only ONE parent element
- ✅ Close all tags (self-close if no children)
- ✅ Use `className` not `class`
- ✅ Use `htmlFor` not `for`
- ✅ Use camelCase for event handlers
- ✅ Use camelCase for multi-word attributes
- ✅ Pass style as objects with camelCase properties
- ✅ Wrap comments in `{/* */}`

---

## Common Pitfalls to Avoid

1. **Forgetting to close tags**: `<input>` should be `<input />`
2. **Using class**: Always use `className`
3. **Multiple root elements**: Wrap in a parent or use fragments
4. **Using for in labels**: Always use `htmlFor`
5. **String-style inline styles**: Use object notation instead

---

## Conclusion

These JSX rules exist because JSX is compiled to JavaScript, and certain HTML conventions conflict with JavaScript syntax. Following these rules ensures your React components compile correctly and function as expected.