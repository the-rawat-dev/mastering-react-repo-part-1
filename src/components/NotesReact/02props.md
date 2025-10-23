# Props in React

## What are Props?

**Props** (short for properties) are arguments passed into React components. They allow us to pass data from a parent component to a child component.

Props are passed to components via HTML attributes, similar to how you would pass attributes to HTML elements.

---

## Basic Example

### Parent Component

```jsx
const App = () => {
  return (
    <User
      img=""
      name="Huxn"
      age={18}
      isMarried={false}
      hobbies={["coding", "reading", "sleeping"]}
    />
  );
}
```

### Child Component

```jsx
const User = (props) => {
  return (
    <section>
      <img src={props.img} alt={props.name} width={200} />
      <h1>Name: {props.name}</h1>
      <h2>Age: {props.age}</h2>
      <h3>Is Married: {props.isMarried}</h3>
      <h4>Hobbies: {props.hobbies}</h4>
    </section>
  );
}
```

---

## Can You Use a Different Parameter Name?

**Yes!** The parameter name `props` is just a convention. You can use any name you prefer.

### Example with Custom Parameter Name

```jsx
const User = (FOO) => {
  return (
    <section>
      <img src={FOO.img} alt={FOO.name} width={200} />
      <h1>Name: {FOO.name}</h1>
      <h2>Age: {FOO.age}</h2>
      <h3>Is Married: {FOO.isMarried}</h3>
      <h4>Hobbies: {FOO.hobbies}</h4>
    </section>
  );
}
```

However, using `props` is recommended as it's the standard convention in React and makes your code more readable.

---

## Destructuring Props (Simplified Approach)

For simplicity and cleaner code, you can use **destructuring** to extract individual properties directly from the props object.

### Example with Destructuring

```jsx
const User = ({ img, name, age, isMarried, hobbies }) => {
  return (
    <section>
      <img src={img} alt={name} width={200} />
      <h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
      <h3>Is Married: {isMarried}</h3>
      <h4>Hobbies: {hobbies}</h4>
    </section>
  );
}
```

### Benefits of Destructuring

- Cleaner, more readable code
- No need to repeatedly write `props.`
- Makes it clear which props the component expects
- Reduces verbosity

---

## Key Takeaways

- Props allow parent-to-child data flow in React
- Props are passed as HTML attributes
- The props object can be named anything (though `props` is conventional)
- Destructuring props improves code readability and reduces repetition
- Props are **read-only** and should not be modified by the child component