function ClearButton(type, value) {
    const handleClick = (event) => {
        // здесь надо будет написать взаимодействие с бэком
    }

    return (
        <button type={type} value={value} onClick={handleClick}>{value}</button>
    );
}

export default ClearButton;