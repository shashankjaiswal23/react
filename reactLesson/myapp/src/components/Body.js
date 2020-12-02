import React from 'react'
import './Body'
import Card from './Card'
function Body() {
    return (
      <div>
        Body
        <Card name="Dog" imgOne="https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp" />
        <Card imgOne="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg" />
        <Card imgOne="https://lh3.googleusercontent.com/proxy/VVb1MhxRuOfbrIqPeqnf30YWDw0EooOjDMPfRgvRKiJKFUHvBabhWTWYH7fYJGES0KUcXQGd0QKvfozU1Z3uwcRJTiSLY9L6ULQJwTElpl9KKpxIU3hZaSZwy9LkpLSqmMKrC_UuntNSGR4npIMMgjdS0xfaIydrjJ0O" />
      </div>
    );
}

export default Body
