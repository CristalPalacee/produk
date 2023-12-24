

const Alquran = ({surat}) => {
  return (
    <div>{surat.map((surats) => {
        return (
            <div key={surats.id}>
                <h1>{surats.language}</h1>
                <h1>{surats.radios}</h1>
            </div>
        )
    })}</div>
  )
}

export default Alquran