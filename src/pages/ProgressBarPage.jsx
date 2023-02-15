import { useState } from "react";
import { colorNames } from "./colorNamesProgress";
import ProgressCollection from "./pageComponents/ProgressCollection";


export default function ProgressBarPage() {

    return (

        <div>
            <h2 className="text-3xl">Progress Bar</h2>
            <ProgressCollection names={colorNames.colorNames1} size="small" title="Small" />
            <ProgressCollection names={colorNames.colorNames2} size="normal" title="Normal Size" />
            <ProgressCollection names={colorNames.colorNames3} size="large" title="Large" />
            <ProgressCollection names={colorNames.colorNames4} size="xlarge" title="X Large" />
        </div>
    )
}