import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
    setActiveTab: (tab: number) => void;
    tabItems: string[];
}

const Breadcrumb = (props: Props) => {
    const { setActiveTab, tabItems } = props;
    return (
        <nav
            className="flex justify-start items-center"
            aria-label="Breadcrumb"
        >
            <ol className="inline-flex justify-start items-center space-x-1 md:space-x-3">
                {tabItems.map((item, index) => {
                    return (
                        <li key={index} className="flex ">
                            <div className="flex justify-evenly items-center gap-3">
                                <h1
                                    className="inline-flex items-center text-md font-medium hover:text-black/50"
                                    onClick={() => setActiveTab(index)}
                                >
                                    {item}
                                </h1>
                                <FontAwesomeIcon
                                    icon={faAngleRight}
                                    size="2x"
                                    className="h-5 w-5"
                                />
                            </div>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}

export default Breadcrumb