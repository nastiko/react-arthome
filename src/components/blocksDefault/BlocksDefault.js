import blocksDefaultsData from "./blocksDefaultsData";
import BlockItemRender from "./BlockItemRender";

export default function BlocksDefault() {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-rows-1 justify-center justify-items-center gap-y-10 md:gap-y-11 md:gap-x-6">
                {blocksDefaultsData.map((item, i) =>
                    <BlockItemRender
                        key={item.id}
                        {...item}
                        i={i}
                    />
                )}
            </div>
        </>
    )
}