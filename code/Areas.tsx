import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"

/**
 * Convert an integer to a letter
 * e.g. 1 => a, 2 => b, 3 => c, ...
 */
function numberToLetter(n: number) {
    return (n + 10).toString(36).toLowerCase()
}

export function Areas(props) {
    const array = []
    const names: string[] = []

    /**
     * For each connected frame check if its name is repeated
     * and creates an array of element clons with new props
     */
    if (props.frames.length) {
        props.frames.forEach((frame, i) => {
            // @ts-ignore
            if (names.includes(frame.props.name) && props.names) {
                console.warn(
                    `There are a duplicated frame name as Area: ${frame.props.name}`
                )
            } else {
                names.push(frame.props.name)
            }

            array.push(
                React.cloneElement(frame, {
                    key: i,
                    style: {
                        position: "relative",
                        height: "100%",
                        width: "100%",
                        borderRadius: props.radius,
                        gridArea: props.names
                            ? frame.props.name
                            : `${numberToLetter(i)}`,
                    },
                })
            )
        })
    }

    /**
     * Validate that each row has the same number of columns
     * and returns the number of columns
     */
    function getColumns(): number {
        let last: number

        props.rows.forEach((row, i) => {
            const curr = row.split(" ").length

            if (last != curr && i != 0) {
                console.error(
                    `Each row should have the same amount of columns (check row ${i +
                        1})`
                )

                return last
            } else {
                last = curr
            }
        })

        return last
    }

    /**
     * Get a list of all areas names defined in the rows
     */
    function getAllAreasNames(): string[] {
        let areaNames: string[] = []

        props.rows.forEach(row => {
            let rowArr = row.split(" ")

            rowArr.forEach(col => {
                // @ts-ignore
                if (!areaNames.includes(col)) {
                    areaNames.push(col)
                }
            })
        })

        return areaNames.sort()
    }

    /**
     * Generate the initial layout when are not frames connected
     */
    function empty() {
        let areas = getAllAreasNames()
        let content = []

        areas.forEach((area, i) => {
            content.push(
                <Frame
                    key={i}
                    style={{
                        position: "relative",
                        height: "100%",
                        width: "100%",
                        gridArea: props.names ? area : `${numberToLetter(i)}`,
                        borderRadius: props.radius,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "1.25em",
                        fontWeight: 600,
                        color: "#104E7A",
                    }}
                >
                    {props.names ? area : `${numberToLetter(i)}`}
                </Frame>
            )
        })

        return content
    }

    return (
        <div
            style={{
                width: props.width,
                height: props.height,
                display: "grid",
                gridTemplateColumns: `repeat(${getColumns()}, 1fr)`,
                gridTemplateRows: `repeat(${props.rows.length}, 1fr)`,
                gridTemplateAreas: props.rows.map(r => `"${r}"`).join(" "),
                rowGap: props.rowGap,
                columnGap: props.columnGap,
            }}
        >
            {array.length ? array : empty()}
        </div>
    )
}

Areas.defaultProps = {
    frames: [],
    names: false,
    rows: ["a a b d", "a a b e", "a a c c"],
    rowGap: 10,
    columnGap: 10,
    radius: 0,
    border: "transparent",
}

addPropertyControls(Areas, {
    frames: {
        type: ControlType.Array,
        propertyControl: {
            type: ControlType.ComponentInstance,
        },
        title: "Frames",
    },
    rows: {
        type: ControlType.Array,
        propertyControl: {
            type: ControlType.String,
        },
        title: "Rows",
    },
    names: {
        type: ControlType.Boolean,
        title: "Names",
        enabledTitle: "Names",
        disabledTitle: "Letters",
    },
    columnGap: { type: ControlType.Number, title: "X Gap" },
    rowGap: { type: ControlType.Number, title: "Y Gap" },
    radius: { type: ControlType.Number, title: "Radius" },
})
