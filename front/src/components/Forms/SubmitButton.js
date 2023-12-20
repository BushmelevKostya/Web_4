function SubmitButton(value) {
    return (
        <button type="submit" value={value}
        className="submit-button">{value}</button>
    );
}

export default SubmitButton;