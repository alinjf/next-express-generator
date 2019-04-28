import React from "react";
import Link from "next/link";

export default class ShoppingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav>
        <Link href="/">
          home
        </Link>

        <Link href="/page-1">
          page 1
        </Link>
      </nav>
    );
  }
}
