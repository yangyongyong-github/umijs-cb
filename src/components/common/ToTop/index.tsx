import React, { useMemo } from 'react'
import './index.scss'

export default function ToTop() {

    // const handleScroll = () => {
    //     this.scrollTop =
    //       window.pageYOffset ||
    //       document.documentElement.scrollTop ||
    //       document.body.scrollTop;
    //     if (this.scrollTop > 500) {
    //       this.goTopShow = true;
    //     } else {
    //       this.goTopShow = false;
    //     }
    //   },
    // handler
    const memoHandler = (v: number) => v
    var _scrollTop: number = useMemo(() => memoHandler(document.documentElement.scrollTop), [])

    return (
        <div className='to-top'
            style={{ 'display': (_scrollTop >= 500 ? 'block' : 'none') }}
            onClick={() => {
                console.log(_scrollTop);
                document.documentElement.scrollTop = 0
            }}

        >  </div>
    )
}
