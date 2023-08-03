/** @format */

export interface IColorVariants {
    red: 'bg-red'
    teal: 'bg-teal'
    pink: 'bg-pink'
    purple: 'bg-purple'
    yellow: 'bg-yellow'
    blue: 'bg-blue'
    green: 'bg-green'
}

// Tailwind tree-shaking removes unused classes and as such dynamic classes are not recommended.
// Instead we create a map obj and index whatever classes we wish to be shipped
// They can now be used dynamically using obj indexing inside the className property
const colorVariants: IColorVariants = {
    red: 'bg-red',
    teal: 'bg-teal',
    pink: 'bg-pink',
    purple: 'bg-purple',
    yellow: 'bg-yellow',
    blue: 'bg-blue',
    green: 'bg-green',
} as const

export default colorVariants
