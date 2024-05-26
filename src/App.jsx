import './App.css'
import Button from "./components/Button.jsx";
import Product from "./components/Product.jsx";
import Tile from "./components/Tile.jsx";

function App() {
  return (<>
  <h1>Handbags & Purses</h1>
  <nav>
    <Button isDisabled={false} text="to the collection"/>
    <Button isDisabled={false} text="shop all bags"/>
    <Button isDisabled={true} text="pre-orders"/>
  </nav>
  <main>
    <Product label="Best seller" name="The handy bag" image="src/assets/bag_1.png" price="€400,-"></Product>
    <Product label="Best seller" name="The stylish bag" image="src/assets/bag_2.png" price="€250,-"></Product>
    <Product label="New collection" name="The simple bag" image="src/assets/bag_3.png" price="€300,-"></Product>
    <Product label="New collection" name="The trendy bag" image="src/assets/bag_4.png" price="€150,-"></Product>
  </main>
  <footer>
    <Tile image="src/assets/brand.png" title="The brand">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </Tile>
    <Tile title="Our story" image={null}>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.</p>
    </Tile>
    <Tile image="src/assets/our_story.png" title={null}/>
  </footer>
  </>)
}

/*
Button > Disabled, text, target
 */

export default App
