// contaienr component は、ロジックに責任を持つコンポーネントのことです。
import { connect } from "react-redux";
import { increment, decrement } from "../../redux/count/actions";
import Counter from "./presentation";

const mapStateProps = ({ count }) => ({ count });
// const mapStateProps = state => {
//   return { count: state.count };
// };

const mapDispatchProps = dispatch => ({
  increment: count => {
    dispatch(increment(count));
  },
  decrement: count => {
    dispatch(decrement(count));
  }
});

// HOC（Hight Order Component） と呼ばれコンポーネントを返す関数になっている
export default connect(
  mapStateProps,
  mapDispatchProps
)(Counter);
