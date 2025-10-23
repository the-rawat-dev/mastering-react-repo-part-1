# Conditional Rendering in React

## What is Conditional Rendering?

Conditional rendering allows us to dynamically display different UI components or content based on specific conditions. This enables us to create more interactive and responsive user experiences.

---

## Two Main Ways to Achieve Conditional Rendering

1. **Using `if` and `else` statements**
2. **Using Ternary Operator (`? :`)**

---

## Method 1: Using `if` and `else`

### Example: Password Validation

```jsx
const ValidPassword = () => <h1>Valid Password</h1>;
const InvalidPassword = () => <h1>Invalid Password</h1>;

const Password = ({ isValid }) => {
  if (isValid) {
    return <ValidPassword />;
  }
  return <InvalidPassword />;
}

const App = () => {
  return <Password isValid={true} />;
}
```

### How It Works

- The `Password` component receives `isValid` as a prop
- If `isValid` is `true`, it returns the `ValidPassword` component
- Otherwise, it returns the `InvalidPassword` component
- This approach uses early return pattern for cleaner code

---

## Method 2: Using Ternary Operator

### Same Example with Ternary Operator

```jsx
const ValidPassword = () => <h1>Valid Password</h1>;
const InvalidPassword = () => <h1>Invalid Password</h1>;

const Password = ({ isValid }) => {
  return isValid ? <ValidPassword /> : <InvalidPassword />;
}

const App = () => {
  return <Password isValid={true} />;
}
```

### Benefits of Ternary Operator

- More concise and compact
- Better for simple conditions
- Can be used inline within JSX
- Easier to read for straightforward conditional rendering

---

## Example 2: Shopping Cart with Conditional Content

### Using Logical AND (`&&`) Operator

```jsx
const Cart = () => {
  const items = ["Wireless Earbuds", "Power Bank", "Sony Headphones", "Hoodie"];
  
  return (
    <>
      <h1>Cart</h1>
      {items.length > 0 && (
        <h2>You have {items.length} items in your cart</h2>
      )}
      <dl>
        <dt>Products</dt>
        {items.map((item, index) => (
          <dd key={index}>{item}</dd>
        ))}
      </dl>
    </>
  );
}
```

### How the `&&` Operator Works

- If the condition before `&&` is `true`, the expression after it is rendered
- If the condition is `false`, nothing is rendered
- Perfect for showing/hiding elements based on a condition
- In this example: only show the item count if `items.length > 0`

---

## Comparison: When to Use Each Method

### Use `if/else` when:
- You have complex logic
- Multiple conditions to check
- Need to execute additional code before returning
- The condition logic is more readable with statements

### Use Ternary Operator when:
- Simple true/false conditions
- Rendering one of two components
- Keeping code concise
- Inline conditional rendering within JSX

### Use `&&` Operator when:
- You want to render something or nothing (not an alternative)
- Simple show/hide logic
- Cleaner than ternary for single condition rendering

---

## Additional Conditional Rendering Patterns

### Multiple Conditions with `if/else if`

```jsx
const UserGreeting = ({ role }) => {
  if (role === "admin") {
    return <h1>Welcome Admin!</h1>;
  } else if (role === "user") {
    return <h1>Welcome User!</h1>;
  } else {
    return <h1>Welcome Guest!</h1>;
  }
}
```

### Inline Conditional with Ternary

```jsx
const Product = ({ inStock }) => {
  return (
    <div>
      <h2>Product Name</h2>
      <p>Status: {inStock ? "Available" : "Out of Stock"}</p>
      <button disabled={!inStock}>
        {inStock ? "Add to Cart" : "Notify Me"}
      </button>
    </div>
  );
}
```

### Conditional Styling

```jsx
const Alert = ({ type, message }) => {
  return (
    <div className={type === "error" ? "alert-error" : "alert-success"}>
      {message}
    </div>
  );
}
```

---

## Best Practices

1. **Keep conditions simple**: Complex conditions should be extracted to variables or functions
2. **Avoid nested ternaries**: They become hard to read; use `if/else` instead
3. **Use meaningful variable names**: Make conditions self-documenting
4. **Consider performance**: Don't perform expensive operations in render conditions
5. **Handle edge cases**: Always consider what happens with `null`, `undefined`, or empty values

---

## Common Pitfalls

### ❌ Avoid This (Falsy values can cause issues)

```jsx
// If count is 0, it will render "0" instead of nothing
{count && <p>Count: {count}</p>}
```

### ✅ Do This Instead

```jsx
{count > 0 && <p>Count: {count}</p>}
// or
{count ? <p>Count: {count}</p> : null}
```

---

## Key Takeaways

- Conditional rendering makes React apps dynamic and interactive
- Three main approaches: `if/else`, ternary operator (`? :`), and logical AND (`&&`)
- Choose the method based on complexity and readability
- `if/else` for complex logic, ternary for simple either/or, `&&` for show/hide
- Always consider edge cases and falsy values in your conditions
- Keep conditional logic clean and readable for maintainability