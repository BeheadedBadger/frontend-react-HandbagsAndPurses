import './App.css'
import Button from "./components/Button.jsx";
import Product from "./components/Product.jsx";

function App() {
  return (<>
  <h1>Handbags & Purses</h1>
  <nav>
    <Button isDisabled={false} text="to the collection" target="location.href='http://www.example.com'"/>
    <Button isDisabled={false} text="shop all bags" target="location.href='http://www.example.com'"/>
    <Button isDisabled={true} text="pre-orders" target="location.href='http://www.example.com'"/>
  </nav>
  <main>
    <Product label="Best seller" name="The handy bag" image="src/assets/bag_1.png" price="€400,-"></Product>
    <Product label="Best seller" name="The stylish bag" image="src/assets/bag_2.png" price="€250,-"></Product>
    <Product label="New collection" name="The simple bag" image="src/assets/bag_3.png" price="€300,-"></Product>
    <Product label="New collection" name="The trendy bag" image="src/assets/bag_4.png" price="€150,-"></Product>
  </main>
  </>)
}

/*
Button > Disabled, text, target
 */

export default App
