export default () => {
    const circles = [ "red", "yellow", "green" ].map(c => (
        <div key={c} className={`circle ${c}`}></div>
    ))
    return (
        <div className="circles">
          {circles}
        </div>
    )
}
