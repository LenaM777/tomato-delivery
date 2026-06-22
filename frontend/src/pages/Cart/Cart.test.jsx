// @vitest-environment jsdom
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import Cart from "./Cart";

describe("Cart Component", () => {
  const mockFoodList = [
    { _id: "1", name: "Salad", price: 10, image: "salad.jpg" },
    { _id: "2", name: "Pizza", price: 20, image: "pizza.jpg" },
  ];

  const renderCartWithRouter = (contextValue) => {
    const routes = [
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order",
        element: <div data-testid="order-page">Order Page Target</div>,
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ["/cart"],
    });

    return render(
      <StoreContext.Provider value={contextValue}>
        <RouterProvider router={router} />
      </StoreContext.Provider>
    );
  };

  it("should render only items with quantity greater than 0", () => {
    const contextValue = {
      food_list: mockFoodList,
      cartItems: { 1: 2, 2: 0 },
      removeFromCart: vi.fn(),
      getTotalCartAmount: () => 20,
    };

    renderCartWithRouter(contextValue);

    expect(screen.getByText("Salad")).toBeInTheDocument();
    expect(screen.getByText("$10")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getAllByText("$20")).toHaveLength(2);
    expect(screen.queryByText("Pizza")).not.toBeInTheDocument();
  });

  it("should call removeFromCart when cross icon is clicked", () => {
    const mockRemove = vi.fn();
    const contextValue = {
      food_list: mockFoodList,
      cartItems: { 1: 1 },
      removeFromCart: mockRemove,
      getTotalCartAmount: () => 10,
    };

    renderCartWithRouter(contextValue);

    const removeButton = screen.getByText("x");
    fireEvent.click(removeButton);

    expect(mockRemove).toHaveBeenCalledTimes(1);
    expect(mockRemove).toHaveBeenCalledWith("1");
  });

  it("should correctly display Subtotal, Delivery and Total amounts", () => {
    const contextValue = {
      food_list: mockFoodList,
      cartItems: { 1: 2 },
      removeFromCart: vi.fn(),
      getTotalCartAmount: () => 20,
    };

    renderCartWithRouter(contextValue);

    expect(screen.getAllByText("$20")).toHaveLength(2);
    expect(screen.getByText("$2")).toBeInTheDocument();
    expect(screen.getByText("$22")).toBeInTheDocument();
  });

  it("should display $0 delivery fee if cart is empty", () => {
    const contextValue = {
      food_list: mockFoodList,
      cartItems: {},
      removeFromCart: vi.fn(),
      getTotalCartAmount: () => 0,
    };

    renderCartWithRouter(contextValue);

    const deliveryFees = screen.getAllByText("$0");
    expect(deliveryFees.length).toBeGreaterThanOrEqual(1);
  });

  it("should redirect to /order page when Checkout button is clicked", () => {
    const contextValue = {
      food_list: mockFoodList,
      cartItems: { 1: 1 },
      removeFromCart: vi.fn(),
      getTotalCartAmount: () => 10,
    };

    renderCartWithRouter(contextValue);

    const checkoutButton = screen.getByText("PROCEED TO CHECKOUT");
    fireEvent.click(checkoutButton);

    expect(screen.getByTestId("order-page")).toBeInTheDocument();
  });
});
