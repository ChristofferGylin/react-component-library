const Alert = (props) => {

    const { color, Icon, children, onDismiss } = props;

    const commonAtt = `w-full px-4 py-6 rounded-xl`;
    let colorAtt = `bg-red-400`;

    if (color === 'blue') {

        colorAtt = `bg-blue-400`;

    }

    if (Icon) {

        return (
            <div className={`flex items-center gap-2 ${commonAtt} ${colorAtt}`}><span><Icon className="text-2xl" /></span> <span>{children}</span></div>
        )

    } else {

        return (
            <div className={`${commonAtt} ${colorAtt}`}>{children}</div>
        )

    }

}

export default Alert;