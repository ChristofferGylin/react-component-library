import { colorsIcons } from './colorsIcons';
import selectColorNoHover from './selectColorNoHover';
import { AiFillStar } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { AiFillFire } from 'react-icons/ai';
import { MdLocalFireDepartment } from 'react-icons/md';
import { RiCheckboxBlankFill } from 'react-icons/ri';
import { RiCheckboxBlankCircleFill } from 'react-icons/ri';
import { GiBanana } from 'react-icons/gi';
import { GiTacos } from 'react-icons/gi';

const point = (Icon, color, size, key) => {

    let sizes;

    if (size === 'normal' || size === undefined || size === null) {

        sizes = `text-base mr-1`;

    } else if (size === 'small') {

        sizes = `text-sm mr-0.5`;

    } else if (size === 'large') {


        sizes = `text-lg mr-2`;

    } else if (size === 'xlarge') {


        sizes = `text-xl mr-2`;

    }

    return (
        <Icon key={key} className={`${color} ${sizes} inline-block`} />
    )
}

const RatingSystem = (props) => {

    const { rating, size, icon, colorRated, colorUnrated } = props;

    const icons = [
        {
            colorRated: 'yellow-normal',
            colorUnrated: 'gray-normal',
            icon: AiFillStar
        },

        {
            colorRated: 'red-normal',
            colorUnrated: 'gray-normal',
            icon: AiFillHeart
        },

        {
            colorRated: 'amber-normal',
            colorUnrated: 'gray-normal',
            icon: AiFillFire
        },

        {
            colorRated: 'amber-normal',
            colorUnrated: 'gray-normal',
            icon: MdLocalFireDepartment
        },

        {
            colorRated: 'yellow-normal',
            colorUnrated: 'gray-light',
            icon: GiBanana
        },

        {
            colorRated: 'yellow-normal',
            colorUnrated: 'gray-light',
            icon: GiTacos
        },

        {
            colorRated: 'sky-normal',
            colorUnrated: 'sky-light',
            icon: RiCheckboxBlankFill
        },

        {
            colorRated: 'sky-normal',
            colorUnrated: 'sky-light',
            icon: RiCheckboxBlankCircleFill
        }
    ];

    const points = [];
    let iconTag;
    const colorStyle = {
        rated: undefined,
        unrated: undefined
    }

    if (icon) {

        if (typeof icon === 'string') {



            iconTag = icons[icon].icon;

            if (colorRated) {

                colorStyle.rated = selectColorNoHover(colorRated, colorsIcons);

            } else {

                colorStyle.rated = selectColorNoHover(icons[icon].colorRated, colorsIcons);

            }

            if (colorUnrated) {

                colorStyle.unrated = selectColorNoHover(colorUnrated, colorsIcons);

            } else {

                colorStyle.unrated = selectColorNoHover(icons[icon].colorUnrated, colorsIcons);

            }

        } else if (typeof icon === 'function') {

            iconTag = icon;

            if (colorRated) {

                colorStyle.rated = selectColorNoHover(colorRated, colorsIcons);

            } else {

                colorStyle.rated = selectColorNoHover(icons[0].colorRated, colorsIcons);

            }

            if (colorUnrated) {

                colorStyle.unrated = selectColorNoHover(colorUnrated, colorsIcons);

            } else {

                colorStyle.unrated = selectColorNoHover(icons[0].colorUnrated, colorsIcons);

            }

        }

    } else {

        iconTag = icons[0].icon;

        if (colorRated) {

            colorStyle.rated = selectColorNoHover(colorRated, colorsIcons);

        } else {

            colorStyle.rated = selectColorNoHover(icons[0].colorRated, colorsIcons);

        }

        if (colorUnrated) {

            colorStyle.unrated = selectColorNoHover(colorUnrated, colorsIcons);

        } else {

            colorStyle.unrated = selectColorNoHover(icons[0].colorUnrated, colorsIcons);

        }

    }

    const ratingSplit = rating.split('/');

    if (ratingSplit.length > 1) {

        let rate = parseFloat(ratingSplit[0])
        rate = Math.round(rate);
        const outOf = parseInt(ratingSplit[1])

        for (let i = 0; i < rate; i++) {

            points.push(point(iconTag, colorStyle.rated, size, `ratingIconRated[${i}]`))

        }

        for (let i = 0; i < outOf - rate; i++) {

            points.push(point(iconTag, colorStyle.unrated, size, `ratingIconUnrated[${i}]`))

        }

    } else {

        let rate = parseFloat(rating);
        rate = Math.round(rate);

        for (let i = 0; i < rate; i++) {

            points.push(point(iconTag, colorStyle.rated, size, `ratingIconRated[${i}]`))

        }

    }

    return (

        <div>{points}</div>

    )

}

export default RatingSystem;

