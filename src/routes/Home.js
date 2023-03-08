import Header from '../components/Header';
import TodosLogic from '../components/TodosLogic';

const Home = () => (
  <>
    <div className="wrapper">
      <div className="todos">
        {/* <Navbar />
        <Modal />
        <UncontrolledForm />
        <Form /> */}
        <Header />
        <TodosLogic />
      </div>
    </div>
  </>
);

export default Home;
