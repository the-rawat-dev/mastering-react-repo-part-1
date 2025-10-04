# Assignment 1: map() Method Practice Questions

**Total Questions:** 15  
**Difficulty Levels:** Beginner (1-5), Intermediate (6-10), Advanced (11-15)  
**Time Estimate:** 3-4 hours  
**Topic:** React map() method - Comprehensive Practice

---

## Instructions

- Complete all 15 problems in order
- Use proper React syntax (JSX rules apply)
- Always use appropriate key props
- Test your components to ensure they render correctly
- Focus only on the map() method implementations
- Write clean, readable code with proper formatting

---

## Beginner Level (Questions 1-5)

### Question 1: Simple String Array
**Difficulty:** ⭐ Easy

**Scenario:** You have a list of city names that need to be displayed in an ordered list.

**Data:**
```javascript
const cities = ['New York', 'London', 'Tokyo', 'Paris', 'Sydney', 'Mumbai', 'Dubai'];
```

**Requirements:**
- Render each city in an `<li>` tag inside an `<ol>`
- Use index as key (since there are no unique IDs)
- Display each city name in uppercase
- Wrap everything in a component called `CityList`

**Expected Output:**
```
1. NEW YORK
2. LONDON
3. TOKYO
...
```

---

### Question 2: Number Manipulation
**Difficulty:** ⭐ Easy

**Scenario:** Display a list of numbers with their squares and cubes.

**Data:**
```javascript
const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
```

**Requirements:**
- Use map() to create cards showing: Number, Square, Cube
- Each card should be a `<div>` with className "number-card"
- Display format: "Number: X | Square: Y | Cube: Z"
- Use index as key
- Component name: `NumberCards`

**Example Output for one card:**
```
Number: 2 | Square: 4 | Cube: 8
```

---

### Question 3: Profile Cards
**Difficulty:** ⭐⭐ Easy-Medium

**Scenario:** Create a social media style profile card list.

**Data:**
```javascript
const profiles = [
  { id: 'u1', username: 'johndoe', followers: 1200, isVerified: true },
  { id: 'u2', username: 'janesmitth', followers: 850, isVerified: false },
  { id: 'u3', username: 'mikebrown', followers: 3400, isVerified: true },
  { id: 'u4', username: 'sarahwilson', followers: 420, isVerified: false },
  { id: 'u5', username: 'davidlee', followers: 5600, isVerified: true }
];
```

**Requirements:**
- Map through profiles and create a card for each
- Show username with @ symbol (e.g., @johndoe)
- Display follower count
- Show a ✓ badge if verified, nothing if not verified
- Use proper key (id)
- Add className "profile-card" to each card
- Component name: `ProfileCards`

---

### Question 4: Icon List with Emojis
**Difficulty:** ⭐⭐ Medium

**Scenario:** Create a feature list with emoji icons.

**Data:**
```javascript
const features = [
  { id: 'f1', icon: '🚀', title: 'Fast Performance', description: 'Lightning quick loading times' },
  { id: 'f2', icon: '🔒', title: 'Secure', description: 'Bank-level encryption' },
  { id: 'f3', icon: '💡', title: 'Smart', description: 'AI-powered recommendations' },
  { id: 'f4', icon: '🎨', title: 'Beautiful', description: 'Stunning user interface' },
  { id: 'f5', icon: '📱', title: 'Responsive', description: 'Works on all devices' }
];
```

**Requirements:**
- Use map() to render each feature
- Structure: Icon (in h2), Title (in h3), Description (in p)
- Wrap each feature in a div with className "feature-item"
- Use proper keys
- Component name: `FeatureList`

---

### Question 5: Color Palette Generator
**Difficulty:** ⭐⭐ Medium

**Scenario:** Display a color palette with color codes.

**Data:**
```javascript
const colors = [
  { id: 'c1', name: 'Ocean Blue', hex: '#0077BE', rgb: 'rgb(0, 119, 190)' },
  { id: 'c2', name: 'Sunset Orange', hex: '#FF6B35', rgb: 'rgb(255, 107, 53)' },
  { id: 'c3', name: 'Forest Green', hex: '#2D6A4F', rgb: 'rgb(45, 106, 79)' },
  { id: 'c4', name: 'Royal Purple', hex: '#7209B7', rgb: 'rgb(114, 9, 183)' },
  { id: 'c5', name: 'Sunset Pink', hex: '#F72585', rgb: 'rgb(247, 37, 133)' }
];
```

**Requirements:**
- Map through colors and create a color swatch for each
- Each swatch should have a div with inline style using the hex color as background
- Display color name, hex code, and rgb value below the swatch
- The color swatch should be 100px x 100px
- Use proper keys
- Component name: `ColorPalette`

---

## Intermediate Level (Questions 6-10)

### Question 6: Conditional Rendering in Lists
**Difficulty:** ⭐⭐⭐ Medium

**Scenario:** Display a product inventory with stock status indicators.

**Data:**
```javascript
const inventory = [
  { id: 'p1', product: 'Laptop', quantity: 5, reorderLevel: 10, price: 999 },
  { id: 'p2', product: 'Mouse', quantity: 45, reorderLevel: 20, price: 25 },
  { id: 'p3', product: 'Keyboard', quantity: 0, reorderLevel: 15, price: 75 },
  { id: 'p4', product: 'Monitor', quantity: 8, reorderLevel: 10, price: 300 },
  { id: 'p5', product: 'Webcam', quantity: 2, reorderLevel: 5, price: 80 },
  { id: 'p6', product: 'Headphones', quantity: 15, reorderLevel: 10, price: 120 }
];
```

**Requirements:**
- Use map() to render inventory items
- Display: Product name, Quantity, Price
- Show status based on conditions:
  - If quantity === 0: Show "🔴 OUT OF STOCK" in red
  - If quantity < reorderLevel: Show "🟡 LOW STOCK" in orange
  - If quantity >= reorderLevel: Show "🟢 IN STOCK" in green
- Add different className based on status ('out-of-stock', 'low-stock', 'in-stock')
- Use proper keys
- Component name: `InventoryList`

---

### Question 7: Nested Arrays - Menu with Categories
**Difficulty:** ⭐⭐⭐ Medium-Hard

**Scenario:** Create a restaurant menu organized by categories.

**Data:**
```javascript
const menu = [
  {
    id: 'cat1',
    category: 'Appetizers',
    items: [
      { id: 'item1', name: 'Bruschetta', price: 8.99, spicy: false },
      { id: 'item2', name: 'Buffalo Wings', price: 12.99, spicy: true },
      { id: 'item3', name: 'Mozzarella Sticks', price: 9.99, spicy: false }
    ]
  },
  {
    id: 'cat2',
    category: 'Main Course',
    items: [
      { id: 'item4', name: 'Grilled Salmon', price: 24.99, spicy: false },
      { id: 'item5', name: 'Spicy Pasta', price: 18.99, spicy: true },
      { id: 'item6', name: 'Beef Steak', price: 29.99, spicy: false }
    ]
  },
  {
    id: 'cat3',
    category: 'Desserts',
    items: [
      { id: 'item7', name: 'Chocolate Cake', price: 7.99, spicy: false },
      { id: 'item8', name: 'Tiramisu', price: 8.99, spicy: false }
    ]
  }
];
```

**Requirements:**
- Use map() for categories (outer map)
- Use map() for items within each category (inner/nested map)
- Display category name as a heading
- For each item, show: name, price, and 🌶️ emoji if spicy
- Wrap each category in a div with className "menu-category"
- Wrap each item in a div with className "menu-item"
- Use proper keys for both levels
- Component name: `RestaurantMenu`

---

### Question 8: Filtering Before Mapping
**Difficulty:** ⭐⭐⭐ Medium-Hard

**Scenario:** Display students who passed their exams (score >= 60).

**Data:**
```javascript
const students = [
  { id: 's1', name: 'Alice Johnson', score: 85, subject: 'Math' },
  { id: 's2', name: 'Bob Smith', score: 45, subject: 'Math' },
  { id: 's3', name: 'Charlie Brown', score: 72, subject: 'Science' },
  { id: 's4', name: 'Diana Prince', score: 91, subject: 'English' },
  { id: 's5', name: 'Ethan Hunt', score: 58, subject: 'History' },
  { id: 's6', name: 'Fiona Green', score: 67, subject: 'Math' },
  { id: 's7', name: 'George Wilson', score: 95, subject: 'Science' },
  { id: 's8', name: 'Hannah Lee', score: 52, subject: 'English' }
];
```

**Requirements:**
- Use `.filter()` to get only students with score >= 60
- Then use `.map()` to render the passing students
- Display: Name, Subject, Score
- Add a grade badge based on score:
  - 90-100: "A" grade (green background)
  - 80-89: "B" grade (blue background)
  - 70-79: "C" grade (yellow background)
  - 60-69: "D" grade (orange background)
- Show total count of passing students
- Use proper keys
- Component name: `PassingStudents`

---

### Question 9: Sorting Before Mapping
**Difficulty:** ⭐⭐⭐ Medium-Hard

**Scenario:** Display a leaderboard sorted by highest score.

**Data:**
```javascript
const players = [
  { id: 'p1', username: 'ShadowNinja', score: 15420, level: 47, country: 'USA' },
  { id: 'p2', username: 'DragonSlayer', score: 28930, level: 62, country: 'UK' },
  { id: 'p3', username: 'PhoenixRising', score: 19870, level: 53, country: 'Canada' },
  { id: 'p4', username: 'ThunderBolt', score: 32100, level: 68, country: 'Australia' },
  { id: 'p5', username: 'IceWarrior', score: 22450, level: 58, country: 'Germany' },
  { id: 'p6', username: 'FireStorm', score: 17890, level: 51, country: 'Japan' },
  { id: 'p7', username: 'MysticMage', score: 25600, level: 60, country: 'France' }
];
```

**Requirements:**
- Sort players by score (highest to lowest)
- Use map() to render sorted players
- Display rank number (1st, 2nd, 3rd, etc.)
- Show: Rank, Username, Score, Level, Country flag emoji (use any emoji)
- Add special styling/trophy emoji for top 3:
  - 1st place: 🥇
  - 2nd place: 🥈
  - 3rd place: 🥉
- IMPORTANT: Don't mutate original array (use spread operator to copy first)
- Use proper keys
- Component name: `Leaderboard`

---

### Question 10: Multiple Operations - Filter, Sort, Map
**Difficulty:** ⭐⭐⭐⭐ Hard

**Scenario:** Display available rental cars, filtered and sorted by price.

**Data:**
```javascript
const cars = [
  { id: 'c1', brand: 'Toyota', model: 'Camry', pricePerDay: 45, available: true, year: 2022, seats: 5 },
  { id: 'c2', brand: 'BMW', model: 'X5', pricePerDay: 120, available: false, year: 2023, seats: 7 },
  { id: 'c3', brand: 'Honda', model: 'Civic', pricePerDay: 40, available: true, year: 2021, seats: 5 },
  { id: 'c4', brand: 'Mercedes', model: 'C-Class', pricePerDay: 95, available: true, year: 2023, seats: 5 },
  { id: 'c5', brand: 'Ford', model: 'Explorer', pricePerDay: 75, available: false, year: 2022, seats: 7 },
  { id: 'c6', brand: 'Tesla', model: 'Model 3', pricePerDay: 110, available: true, year: 2023, seats: 5 },
  { id: 'c7', brand: 'Hyundai', model: 'Elantra', pricePerDay: 35, available: true, year: 2021, seats: 5 },
  { id: 'c8', brand: 'Audi', model: 'A4', pricePerDay: 105, available: true, year: 2022, seats: 5 }
];
```

**Requirements:**
- Filter to show only available cars (available: true)
- Sort by pricePerDay (lowest to highest)
- Map through to render car cards
- Display: Brand, Model, Year, Seats, Price per day
- Add a "Book Now" button for each car
- Show total number of available cars at the top
- Use proper keys
- Component name: `AvailableCars`

---

## Advanced Level (Questions 11-15)

### Question 11: Complex Nested Structure - Organization Chart
**Difficulty:** ⭐⭐⭐⭐ Hard

**Scenario:** Display a company organization structure with departments and employees.

**Data:**
```javascript
const organization = [
  {
    id: 'dept1',
    department: 'Engineering',
    manager: 'John Doe',
    employees: [
      { id: 'e1', name: 'Alice Brown', role: 'Senior Developer', experience: 5 },
      { id: 'e2', name: 'Bob Wilson', role: 'Junior Developer', experience: 2 },
      { id: 'e3', name: 'Charlie Davis', role: 'DevOps Engineer', experience: 4 }
    ]
  },
  {
    id: 'dept2',
    department: 'Marketing',
    manager: 'Jane Smith',
    employees: [
      { id: 'e4', name: 'David Lee', role: 'Content Writer', experience: 3 },
      { id: 'e5', name: 'Emma White', role: 'Social Media Manager', experience: 4 }
    ]
  },
  {
    id: 'dept3',
    department: 'Sales',
    manager: 'Mike Johnson',
    employees: [
      { id: 'e6', name: 'Frank Miller', role: 'Sales Executive', experience: 6 },
      { id: 'e7', name: 'Grace Taylor', role: 'Account Manager', experience: 5 },
      { id: 'e8', name: 'Henry Adams', role: 'Sales Associate', experience: 1 }
    ]
  }
];
```

**Requirements:**
- Use map() to render departments (outer map)
- Use map() to render employees within departments (inner map)
- Show department name and manager
- For each employee, display: Name, Role, Experience years
- Add experience badge: "Experienced" if >= 4 years, "Mid-level" if 2-3 years, "Junior" if < 2 years
- Show employee count for each department
- Style departments differently (alternate background colors)
- Use proper keys at all levels
- Component name: `OrganizationChart`

---

### Question 12: Dynamic Table Generation with Calculations
**Difficulty:** ⭐⭐⭐⭐ Hard

**Scenario:** Create an invoice table with line items and calculations.

**Data:**
```javascript
const invoice = {
  invoiceNumber: 'INV-2024-001',
  date: '2024-01-15',
  items: [
    { id: 'item1', description: 'Web Development', quantity: 40, ratePerHour: 75, taxRate: 0.18 },
    { id: 'item2', description: 'UI/UX Design', quantity: 20, ratePerHour: 85, taxRate: 0.18 },
    { id: 'item3', description: 'SEO Optimization', quantity: 10, ratePerHour: 60, taxRate: 0.18 },
    { id: 'item4', description: 'Content Writing', quantity: 15, ratePerHour: 50, taxRate: 0.18 },
    { id: 'item5', description: 'Server Maintenance', quantity: 5, ratePerHour: 95, taxRate: 0.18 }
  ]
};
```

**Requirements:**
- Use map() to generate table rows for each item
- Create a table with columns: Description, Quantity, Rate, Subtotal, Tax, Total
- Calculate for each row:
  - Subtotal = quantity × ratePerHour
  - Tax = Subtotal × taxRate
  - Total = Subtotal + Tax
- After the items, add a footer row showing:
  - Grand Total (sum of all item totals)
  - Total Tax (sum of all taxes)
  - Final Amount (grand total)
- Format all currency values with $ and 2 decimal places
- Display invoice number and date at the top
- Use proper keys
- Component name: `InvoiceTable`

**Hint:** You may need to calculate grand totals outside the map, or use reduce alongside map

---

### Question 13: Interactive List with State (Conceptual)
**Difficulty:** ⭐⭐⭐⭐⭐ Very Hard

**Scenario:** Create a task list where each task can show/hide details.

**Data:**
```javascript
const tasks = [
  {
    id: 't1',
    title: 'Complete Project Proposal',
    priority: 'high',
    dueDate: '2024-01-20',
    assignedTo: 'John Doe',
    details: 'Prepare comprehensive proposal including timeline, budget, and deliverables',
    estimatedHours: 8
  },
  {
    id: 't2',
    title: 'Review Code Changes',
    priority: 'medium',
    dueDate: '2024-01-18',
    assignedTo: 'Jane Smith',
    details: 'Review pull requests and provide feedback on code quality and best practices',
    estimatedHours: 4
  },
  {
    id: 't3',
    title: 'Update Documentation',
    priority: 'low',
    dueDate: '2024-01-25',
    assignedTo: 'Bob Wilson',
    details: 'Update API documentation with new endpoints and authentication methods',
    estimatedHours: 6
  },
  {
    id: 't4',
    title: 'Fix Critical Bug',
    priority: 'high',
    dueDate: '2024-01-16',
    assignedTo: 'Alice Brown',
    details: 'Resolve payment processing issue affecting checkout flow',
    estimatedHours: 5
  },
  {
    id: 't5',
    title: 'Team Meeting Preparation',
    priority: 'medium',
    dueDate: '2024-01-19',
    assignedTo: 'Charlie Davis',
    details: 'Prepare agenda and presentation slides for quarterly review meeting',
    estimatedHours: 3
  }
];
```

**Requirements:**
- Use map() to render task items
- Display: Title, Priority (with color coding), Due Date, Assigned To
- Add a "Show Details" button for each task
- Priority colors: High (red), Medium (orange), Low (green)
- Initially show only basic info
- When conceptualizing: Details section should toggle on button click (you don't need to implement state, just structure it as if you would)
- Show estimated hours in the details section
- Add a visual indicator for overdue tasks (date < today)
- Use proper keys
- Component name: `TaskList`

**Note:** Focus on the map() implementation and structure. You can add onClick handlers that console.log for now.

---

### Question 14: Triple Nested Map - E-commerce Categories
**Difficulty:** ⭐⭐⭐⭐⭐ Very Hard

**Scenario:** Display a mega menu structure for an e-commerce site.

**Data:**
```javascript
const megaMenu = [
  {
    id: 'main1',
    mainCategory: 'Electronics',
    subCategories: [
      {
        id: 'sub1',
        name: 'Computers',
        products: [
          { id: 'prod1', name: 'Laptops', count: 150 },
          { id: 'prod2', name: 'Desktops', count: 80 },
          { id: 'prod3', name: 'Tablets', count: 120 }
        ]
      },
      {
        id: 'sub2',
        name: 'Mobile Phones',
        products: [
          { id: 'prod4', name: 'Smartphones', count: 300 },
          { id: 'prod5', name: 'Feature Phones', count: 50 }
        ]
      }
    ]
  },
  {
    id: 'main2',
    mainCategory: 'Fashion',
    subCategories: [
      {
        id: 'sub3',
        name: 'Men',
        products: [
          { id: 'prod6', name: 'Shirts', count: 200 },
          { id: 'prod7', name: 'Pants', count: 150 },
          { id: 'prod8', name: 'Shoes', count: 100 }
        ]
      },
      {
        id: 'sub4',
        name: 'Women',
        products: [
          { id: 'prod9', name: 'Dresses', count: 180 },
          { id: 'prod10', name: 'Tops', count: 220 },
          { id: 'prod11', name: 'Accessories', count: 300 }
        ]
      },
      {
        id: 'sub5',
        name: 'Kids',
        products: [
          { id: 'prod12', name: 'Boys Clothing', count: 90 },
          { id: 'prod13', name: 'Girls Clothing', count: 95 }
        ]
      }
    ]
  },
  {
    id: 'main3',
    mainCategory: 'Home & Kitchen',
    subCategories: [
      {
        id: 'sub6',
        name: 'Furniture',
        products: [
          { id: 'prod14', name: 'Sofas', count: 60 },
          { id: 'prod15', name: 'Tables', count: 40 },
          { id: 'prod16', name: 'Chairs', count: 80 }
        ]
      },
      {
        id: 'sub7',
        name: 'Kitchen Appliances',
        products: [
          { id: 'prod17', name: 'Refrigerators', count: 45 },
          { id: 'prod18', name: 'Microwaves', count: 70 },
          { id: 'prod19', name: 'Blenders', count: 100 }
        ]
      }
    ]
  }
];
```

**Requirements:**
- Level 1 map: Main categories
- Level 2 map: Sub-categories within each main category
- Level 3 map: Products within each sub-category
- Display main category as h2
- Display sub-category as h3
- Display products as list items with product count in parentheses
- Calculate and display total product count for each sub-category
- Calculate and display total product count for each main category
- Use proper keys at all three levels
- Add appropriate className for each level ('main-category', 'sub-category', 'product-item')
- Component name: `MegaMenu`

---

### Question 15: Advanced Data Transformation with map()
**Difficulty:** ⭐⭐⭐⭐⭐ Very Hard

**Scenario:** Create a financial dashboard showing monthly transactions with analytics.

**Data:**
```javascript
const transactions = [
  { id: 'tx1', date: '2024-01-05', category: 'Salary', amount: 5000, type: 'income' },
  { id: 'tx2', date: '2024-01-08', category: 'Groceries', amount: -150, type: 'expense' },
  { id: 'tx3', date: '2024-01-10', category: 'Rent', amount: -1200, type: 'expense' },
  { id: 'tx4', date: '2024-01-12', category: 'Freelance', amount: 800, type: 'income' },
  { id: 'tx5', date: '2024-01-15', category: 'Utilities', amount: -200, type: 'expense' },
  { id: 'tx6', date: '2024-01-18', category: 'Entertainment', amount: -80, type: 'expense' },
  { id: 'tx7', date: '2024-01-20', category: 'Investment', amount: 1200, type: 'income' },
  { id: 'tx8', date: '2024-01-22', category: 'Healthcare', amount: -300, type: 'expense' },
  { id: 'tx9', date: '2024-01-25', category: 'Shopping', amount: -450, type: 'expense' },
  { id: 'tx10', date: '2024-01-28', category: 'Bonus', amount: 1500, type: 'income' },
  { id: 'tx11', date: '2024-01-29', category: 'Transportation', amount: -120, type: 'expense' },
  { id: 'tx12', date: '2024-01-30', category: 'Dining', amount: -200, type: 'expense' }
];
```

**Requirements:**
- Use map() to render each transaction
- Display: Date, Category, Amount (formatted with $ and 2 decimals)
- Color code amounts: Green for income, Red for expenses
- Add an icon: ↑ for income, ↓ for expenses
- Sort transactions by date (newest first) before mapping
- Show transaction type badge ('Income' or 'Expense')
- After the transaction list, display summary cards:
  - Total Income (sum of all income transactions)
  - Total Expenses (sum of all expense transactions)
  - Net Balance (income - expenses)
- Calculate the largest expense and highlight it
- Add alternating row colors for better readability
- Use proper keys
- Component name: `FinancialDashboard`

**Challenges:**
- You'll need to use map() for rendering
- You'll need additional calculations (reduce or manual loops) for summaries
- You'll need to identify the largest expense (use Math.max or reduce)
- Complex conditional styling based on multiple factors

**Hint:** Calculate summaries before rendering, then use that data in your JSX

---

## Bonus Challenge (Optional)

### Bonus Question: Performance Optimization Concept
**Difficulty:** ⭐⭐⭐⭐⭐ Expert

**Scenario:** Given the following large dataset, explain how you would optimize the rendering.

**Data:**
```javascript
const largeDataset = Array.from({ length: 10000 }, (_, index) => ({
  id: `item-${index}`,
  title: `Item ${index}`,
  value: Math.floor(Math.random() * 1000),
  category: ['A', 'B', 'C', 'D'][Math.floor(Math.random() * 4)]
}));
```

**Question:**
Write a component that renders this large list and explain:
1. What problems might occur with rendering 10,000 items at once?
2. How would you optimize this using map()? (Hint: Think about pagination, virtual scrolling concepts)
3. If you needed to filter this list by category, what's the most efficient approach?
4. How does the key prop affect performance with large lists?

Write the basic component structure and add comments explaining your optimization strategy.

---

## Submission Guidelines

1. Create separate component files for each question
2. Ensure all components are properly formatted and functional
3. Test each component with the provided data
4. Use proper naming conventions
5. Add comments for complex logic
6. Verify all key props are unique and appropriate

---

## Learning Objectives Covered

✅ Basic map() syntax and usage  
✅ Proper key prop implementation  
✅ Nested map() operations  
✅ Filtering before mapping  
✅ Sorting before mapping  
✅ Conditional rendering within map()  
✅ Complex data transformations  
✅ Multiple array operations chaining  
✅ Performance considerations  
✅ Real-world scenarios and patterns  

---

## Tips for Success

- **Start with simple questions** and progress to harder ones
- **Test frequently** - don't write everything at once
- **Pay attention to keys** - wrong keys cause bugs
- **Read requirements carefully** - each question tests specific skills
- **Format your code** - use proper indentation
- **Use meaningful variable names** in your map callbacks
- **Don't mutate arrays** - use spread operator when needed
- **Console.log your data** if you're stuck to understand the structure

---

## Good Luck! 🚀

Remember: map() is one of the most important methods in React. Mastering it will make you a much more effective React developer!

---

## Answer Key Structure (For Self-Assessment)

After completing each question, check your solution against these criteria:

### Question 1-5 Checklist:
- ✅ Used map() correctly
- ✅ Proper key props (index is acceptable here)
- ✅ All JSX tags properly closed
- ✅ Component has single parent element
- ✅ Data displayed as required

### Question 6-10 Checklist:
- ✅ Conditional logic works correctly
- ✅ Nested maps have proper keys at all levels
- ✅ Filter/Sort doesn't mutate original array
- ✅ Calculations are accurate
- ✅ Complex data structures handled properly

### Question 11-15 Checklist:
- ✅ Triple nested maps work correctly (Q14)
- ✅ All calculations are accurate
- ✅ Performance considerations noted
- ✅ Complex business logic implemented
- ✅ Code is clean and maintainable

---

## Common Mistakes to Watch For

### Mistake #1: Wrong Key Usage
```jsx
// ❌ WRONG
{items.map((item) => <div key={Math.random()}>{item}</div>)}

// ✅ CORRECT
{items.map((item) => <div key={item.id}>{item}</div>)}
```

### Mistake #2: Mutating Original Array
```jsx
// ❌ WRONG - mutates original
const sorted = items.sort();

// ✅ CORRECT - creates new array
const sorted = [...items].sort();
```

### Mistake #3: Missing Return in Map
```jsx
// ❌ WRONG - no return with {}
{items.map((item) => {
  <div>{item.name}</div>
})}

// ✅ CORRECT - implicit return with ()
{items.map((item) => (
  <div>{item.name}</div>
))}

// ✅ ALSO CORRECT - explicit return
{items.map((item) => {
  return <div>{item.name}</div>
})}
```

### Mistake #4: Incorrect Nested Key Props
```jsx
// ❌ WRONG - duplicate keys
{categories.map((cat) => (
  <div key={cat.id}>
    {cat.items.map((item, index) => (
      <div key={index}>{item}</div>
    ))}
  </div>
))}

// ✅ CORRECT - unique composite keys
{categories.map((cat) => (
  <div key={cat.id}>
    {cat.items.map((item, index) => (
      <div key={`${cat.id}-${index}`}>{item}</div>
    ))}
  </div>
))}
```

### Mistake #5: Not Handling Empty Arrays
```jsx
// ❌ WRONG - no handling for empty array
{items.map((item) => <div>{item.name}</div>)}

// ✅ CORRECT - conditional rendering
{items.length > 0 ? (
  items.map((item) => <div key={item.id}>{item.name}</div>)
) : (
  <p>No items found</p>
)}
```

---

## Extended Practice Scenarios

After completing all 15 questions, try these real-world scenarios:

### Scenario A: Social Media Feed
Create a feed showing posts with nested comments (each post has multiple comments, each comment can have replies).

### Scenario B: Shopping Cart
Build a cart that shows items, calculates subtotals, applies discounts, and shows final total.

### Scenario C: Calendar Events
Display events grouped by date, with time slots and event details.

### Scenario D: File Explorer
Create a nested folder structure where folders can contain files and other folders.

### Scenario E: Analytics Dashboard
Show charts data in table format with calculated metrics (averages, totals, percentages).

---

## Performance Tips for Large Lists

### 1. Use Unique, Stable Keys
```jsx
// ✅ BEST - Stable database ID
<div key={item.id}>

// ⚠️ OKAY - Index for static lists only
<div key={index}>

// ❌ NEVER - Random or changing values
<div key={Math.random()}>
<div key={Date.now()}>
```

### 2. Avoid Inline Function Definitions
```jsx
// ❌ LESS OPTIMAL - Creates new function each render
{items.map((item) => (
  <button onClick={() => handleClick(item.id)}>Click</button>
))}

// ✅ MORE OPTIMAL - Define handler outside
const handleItemClick = (id) => handleClick(id);
{items.map((item) => (
  <button onClick={() => handleItemClick(item.id)}>Click</button>
))}
```

### 3. Memoize Expensive Calculations
```jsx
// If you're doing heavy calculations before mapping:
const processedData = useMemo(() => {
  return data.filter(...).sort(...).map(...);
}, [data]);
```

### 4. Consider Virtualization for Very Long Lists
For lists with 1000+ items, look into libraries like:
- `react-window`
- `react-virtual`
- `@tanstack/react-virtual`

---

## Map Method Quick Reference Card

### Basic Syntax
```jsx
array.map((element, index, array) => {
  // return JSX
})
```

### Parameters
- **element**: Current item being processed
- **index**: Current index (0-based)
- **array**: Original array (rarely used)

### Common Patterns

#### Pattern 1: Simple Transformation
```jsx
{numbers.map(num => <li key={num}>{num * 2}</li>)}
```

#### Pattern 2: Object Destructuring
```jsx
{users.map(({ id, name, email }) => (
  <div key={id}>
    <h3>{name}</h3>
    <p>{email}</p>
  </div>
))}
```

#### Pattern 3: Conditional Content
```jsx
{items.map(item => (
  <div key={item.id}>
    {item.active && <span>Active</span>}
    {item.featured ? <b>{item.name}</b> : item.name}
  </div>
))}
```

#### Pattern 4: With Index
```jsx
{items.map((item, index) => (
  <div key={item.id}>
    <span>#{index + 1}</span>
    <span>{item.name}</span>
  </div>
))}
```

#### Pattern 5: Nested Maps
```jsx
{categories.map(category => (
  <div key={category.id}>
    <h2>{category.name}</h2>
    {category.items.map(item => (
      <p key={item.id}>{item.name}</p>
    ))}
  </div>
))}
```

#### Pattern 6: Filter + Map
```jsx
{items
  .filter(item => item.active)
  .map(item => <div key={item.id}>{item.name}</div>)
}
```

#### Pattern 7: Sort + Map
```jsx
{[...items]
  .sort((a, b) => a.price - b.price)
  .map(item => <div key={item.id}>{item.name}</div>)
}
```

#### Pattern 8: Map + Join (for strings)
```jsx
{tags.map(tag => tag.name).join(', ')}
```

---

## Debugging Tips

### Issue: "Each child should have a unique key prop"
**Solution:** Add key prop to the immediate child of map()
```jsx
{items.map(item => (
  <div key={item.id}>  {/* Key goes here */}
    <h3>{item.title}</h3>
  </div>
))}
```

### Issue: Nothing renders
**Check:**
1. Is your array empty? Add: `{items.length === 0 && <p>No items</p>}`
2. Are you returning JSX? Use `()` or explicit `return`
3. Is the data in the correct format?

### Issue: Keys are not unique warning
**Solution:** Ensure each key is truly unique
```jsx
// If items might have duplicate IDs:
{items.map((item, index) => (
  <div key={`${item.id}-${index}`}>{item.name}</div>
))}
```

### Issue: Map is not a function
**Check:**
1. Is your data actually an array?
2. Add: `{Array.isArray(items) && items.map(...)}`

---

## Integration with React Hooks

### With useState
```jsx
const [items, setItems] = useState([]);

return (
  <ul>
    {items.map(item => (
      <li key={item.id}>{item.name}</li>
    ))}
  </ul>
);
```

### With useEffect (Fetching Data)
```jsx
const [users, setUsers] = useState([]);

useEffect(() => {
  fetch('/api/users')
    .then(res => res.json())
    .then(data => setUsers(data));
}, []);

return (
  <div>
    {users.map(user => (
      <UserCard key={user.id} user={user} />
    ))}
  </div>
);
```

### With Event Handlers
```jsx
const handleDelete = (id) => {
  setItems(items.filter(item => item.id !== id));
};

return (
  <ul>
    {items.map(item => (
      <li key={item.id}>
        {item.name}
        <button onClick={() => handleDelete(item.id)}>Delete</button>
      </li>
    ))}
  </ul>
);
```

---

## Final Challenge: Build a Complete App

**Project:** Todo Application with Categories

**Requirements:**
- Display todos grouped by category
- Each category shows: name, count, todos
- Each todo shows: title, description, due date, priority
- Filter todos by: All, Completed, Pending
- Sort todos by: Date, Priority, Name
- Use map() for all list rendering

**Data Structure:**
```javascript
const todoData = {
  categories: [
    {
      id: 'cat1',
      name: 'Work',
      todos: [
        { 
          id: 't1', 
          title: 'Finish report', 
          description: 'Complete Q4 report',
          dueDate: '2024-01-20',
          priority: 'high',
          completed: false 
        },
        // more todos...
      ]
    },
    // more categories...
  ]
};
```

This project will combine everything you've learned!

---

## Resources for Further Learning

### Documentation
- React Official Docs: https://react.dev
- MDN Array.map(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

### Best Practices
- Keep map callbacks pure (no side effects)
- Extract complex map content into separate components
- Use meaningful parameter names
- Consider performance for large lists
- Always handle empty arrays

### Next Steps After This Assignment
1. Learn about `React.memo()` for optimizing list items
2. Explore virtual scrolling libraries
3. Study `useCallback()` for optimizing event handlers in lists
4. Learn about keys and reconciliation in depth
5. Practice with real API data

---

## Congratulations! 🎉

By completing this assignment, you've mastered:
- ✅ The map() method in React
- ✅ Proper key usage
- ✅ Nested data structures
- ✅ Complex data transformations
- ✅ Real-world scenarios
- ✅ Performance considerations
- ✅ Best practices and patterns

You're now ready to handle any list rendering challenge in React!

---

**Assignment Version:** 1.0  
**Last Updated:** January 2024  
**Estimated Completion Time:** 3-4 hours  
**Difficulty Range:** Beginner to Advanced

---

## Assessment Rubric

### For Each Question:

**5 Points - Excellent**
- Correct implementation
- Proper keys
- Clean, readable code
- Follows all requirements
- Handles edge cases

**4 Points - Good**
- Mostly correct
- Minor key issues
- Code works but could be cleaner
- Meets most requirements

**3 Points - Satisfactory**
- Basic implementation works
- Some key problems
- Missing some requirements
- Needs improvement

**2 Points - Needs Work**
- Partial implementation
- Significant issues with keys
- Many requirements missing
- Major bugs

**1 Point - Incomplete**
- Minimal attempt
- Doesn't function properly
- Major conceptual misunderstandings

**Total Possible Points:** 75 (15 questions × 5 points)

### Grading Scale:
- **68-75:** Master Level 🏆
- **60-67:** Advanced Level ⭐⭐⭐
- **52-59:** Intermediate Level ⭐⭐
- **45-51:** Beginner Level ⭐
- **Below 45:** Needs More Practice 📚

---

## Instructor Notes

This assignment is designed to be:
- **Comprehensive:** Covers all map() use cases
- **Progressive:** Builds from simple to complex
- **Practical:** Uses real-world scenarios
- **Educational:** Each question teaches specific skills

Students should spend adequate time on each level before advancing. The bonus question is optional but recommended for those seeking deeper understanding.

---

**End of Assignment**

Happy Coding! 💻✨