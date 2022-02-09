let uuid = 0;

export default function Uuid() {
    const generate = () => {
        uuid++;
        return uuid;
    }
    return {
        generate,
    }
}