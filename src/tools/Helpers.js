export default function Helpers() {
    let errorClassName      = 'is-invalid';
    const getErrorClassName = (errors) => {
        return errors && errors.length ? errorClassName : '';
    };

    return {
        getErrorClassName,
    }
};
