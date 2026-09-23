import React, { useState } from "react";
import Card from './Card';

function Cards({ courses, category }) {

    const [liked, setLinked] = useState([]);

    if (courses === "") {
        return (
            <h1>No Course Available</h1>
        )
    }

    let allCourses = [];

    const getCourses = () => {

        if (category === 'All') {

            Object.values(courses).forEach((category) => {

                category.forEach((course) => {
                    allCourses.push(course);
                })

            })

            return allCourses;
        }
        else {
            return courses[category];
        }
    }

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getCourses().map((coursee) => {

                    return (
                        <Card
                            key={coursee.id}
                            course={coursee}
                            liked={liked}
                            setLinked={setLinked}
                        />
                    )
                })
            }
        </div>
    )
}

export default Cards;