function MobileTopRank(props) {
  return (
    <div>
      <div className="top"></div>
      <h3>{props.rank}</h3>
      <p>{props.name}</p>
      <p>{props.point}P</p>
    </div>
  );
}

export default MobileTopRank;
