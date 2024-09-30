import Title from "./Title";
import Menu from "./Menu";
import menu from "./data";
import { useState } from "react";
import Categories from "./Categories";

const allCategories = ["all", ...new Set(menu.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (category) => {
    console.log(category);
    if (category === "all") {
      setMenuItems(menu);
      return;
    }

    const newItems = menu.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  console.log(categories);

  return (
    <main>
      <section className="menu">
        <Title text="Menu"></Title>
        <Categories
          categories={categories}
          filterItems={filterItems}
        ></Categories>
        <Menu items={menuItems}></Menu>
      </section>
    </main>
  );
};
export default App;
