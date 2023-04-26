function Rank(props) {
  return (
    <div>
      {props.pointSort.map((a, i) => {
        return (
          <div key={i}>
            <span>{i + 1}</span>
            <p>이름: {props.pointSort[i].name}</p>
            <p>점수: {props.pointSort[i].point}P</p>
          </div>
        );
      })}
    </div>
  );
}

export default Rank;
