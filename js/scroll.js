'use strict';

const handleScroll = id => {
    const el = document.getElementById(id);
    el.scrollIntoView({ behavior: "smooth"});
}
