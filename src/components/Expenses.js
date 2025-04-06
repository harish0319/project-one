import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card"; 

function Expenses(props) {
    return (
        <Card className="expenses">
            {props.expenses.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    date={expense.date}
                    location={expense.location}
                    title={expense.title}
                    price={expense.price}
                />
            ))}
        </Card>
    );
}

export default Expenses;