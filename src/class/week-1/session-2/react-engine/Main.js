const Header = () => {

  return (
    <header>
      <nav>
        <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
          {
            ["Home", "About", "Contact", "More"].map(menuItem => (
              <li 
                style={{ cursor: "pointer" }} 
                key={menuItem}
              >
                {menuItem}
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  )
};

const Title = React.createElement(
  "h1",
  { className: "title-main", key: 1 },
  "Soy el nuevo título"
);

const Information = React.createElement(
  "div",
  { key: 1 },
  [ Title ]
);

const App = () => {
  console.log("Header", Header);
  console.log("Information", Information);
  return (
    <div>
      <Header />
      <h1>😍 Hello world</h1>
      {Information}
    </div>
  )
};
const Node = ReactDOM.createRoot(document.getElementById("root"));
Node.render(<App/>);