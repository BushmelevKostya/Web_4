function ClearButton(type, value) {
    const handleClick = (event) => {
        // ����� ���� ����� �������� �������������� � �����
    }

    return (
        <button type={type} value={value} onClick={handleClick}>{value}</button>
    );
}

export default ClearButton;