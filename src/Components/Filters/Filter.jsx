import React, { useRef, useEffect, useState ,useContext } from 'react'
import styles from './Filter.css'
import CategoryFilter from './CategoryFilter';
import { ProductContext } from './../Main'

const Panel = (props) => {
  const [height, setScrollHeight] = useState(0);
  const divElem = useRef(null);

  useEffect(() => {
    window.setTimeout(() => {
      const height = divElem.current.scrollHeight;
      setScrollHeight(height);
    }, 333);
  }, [])
  const { activeTab, index, filterName, activateTab } = props;
  const isActive = activeTab === index;
  const innerStyle = {
    height: `${isActive ? height : 0}px`
  }

  return (
    <div className={styles.panel}
      role='tabpanel'
      aria-expanded={isActive}>
      <button className={styles.panel__label}
        role='tab'
        onClick={activateTab}>
        {filterName}
      </button>
      <div ref={divElem} className={styles.panel__inner}
        style={innerStyle}
        aria-hidden={!isActive}>
        <div className={styles.panel__content}>
          {props.children}
        </div>
      </div>
    </div>
  );
}

const FilterAccordion = () => {

  const [activeTab, setScrollHeight] = useState(0);

  const [prodContext,SetProdContext] = useContext(ProductContext);

  const activateTab = index => setScrollHeight(activeTab === index ? -1 : index)

    return (
      <div className="col-sm-3">
        <div className={styles.accordion} role='tablist'>
          <Panel
            activeTab={activeTab}
            index={1}
            filterName="Category"
            activateTab={()=>activateTab(1)}
          ><CategoryFilter /></Panel>
          <Panel
            activeTab={activeTab}
            index={2}
            filterName="Rating"
            activateTab={()=>activateTab(2)}
          />
          <Panel
            activeTab={activeTab}
            index={3}
            filterName="Price"
            activateTab={()=>activateTab(3)}
          />
          <Panel
            activeTab={activeTab}
            index={4}
            filterName="Discounts/Offers"
            activateTab={()=>activateTab(4)}
          />
        </div>
      </div>
    );
  }

export default FilterAccordion;
