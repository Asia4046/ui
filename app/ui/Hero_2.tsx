import { FocusCards } from "@/components/ui/focus-cards";
 
export function Hero_2() {
  const cards = [
    {
      title: "Friendly Community",
      src: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAswMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQcC/8QAGxABAAMBAAMAAAAAAAAAAAAAAAERMSECElH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A3EAAEqsBQAAAAAAAAAAAAAc+V1NbXIXxv1j22uqAAAAAAAAAAAAAAAAkRUcBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASQUAAAAAAAAAAAAEsFAAAAAAAAAAAAAAAAAAAABJn5oKEZ0AAASlAAAAAAAAAAAAAAAAAAAEnQBQAAAAAAAEkAFAAAAAAAAAH//2Q==",
    },
    {
      title: "Excellent Study Environment",
      src: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAswMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQcC/8QAGxABAAMBAAMAAAAAAAAAAAAAAAERMSECElH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A3EAAEqsBQAAAAAAAAAAAAAc+V1NbXIXxv1j22uqAAAAAAAAAAAAAAAAkRUcBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASQUAAAAAAAAAAAAEsFAAAAAAAAAAAAAAAAAAAABJn5oKEZ0AAASlAAAAAAAAAAAAAAAAAAAEnQBQAAAAAAAEkAFAAAAAAAAAH//2Q==",
    },
    {
      title: "A Large Library Of Reources",
      src: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAswMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQcC/8QAGxABAAMBAAMAAAAAAAAAAAAAAAERMSECElH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A3EAAEqsBQAAAAAAAAAAAAAc+V1NbXIXxv1j22uqAAAAAAAAAAAAAAAAkRUcBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASQUAAAAAAAAAAAAEsFAAAAAAAAAAAAAAAAAAAABJn5oKEZ0AAASlAAAAAAAAAAAAAAAAAAAEnQBQAAAAAAAEkAFAAAAAAAAAH//2Q==",
    },
    {
      title: "JEE/NEET PREP GUIDENCE",
      src: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAswMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQcC/8QAGxABAAMBAAMAAAAAAAAAAAAAAAERMSECElH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A3EAAEqsBQAAAAAAAAAAAAAc+V1NbXIXxv1j22uqAAAAAAAAAAAAAAAAkRUcBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASQUAAAAAAAAAAAAEsFAAAAAAAAAAAAAAAAAAAABJn5oKEZ0AAASlAAAAAAAAAAAAAAAAAAAEnQBQAAAAAAAEkAFAAAAAAAAAH//2Q==",
    },
    {
        title: "Community Doubt Solving",
        src: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAswMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQcC/8QAGxABAAMBAAMAAAAAAAAAAAAAAAERMSECElH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A3EAAEqsBQAAAAAAAAAAAAAc+V1NbXIXxv1j22uqAAAAAAAAAAAAAAAAkRUcBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASQUAAAAAAAAAAAAEsFAAAAAAAAAAAAAAAAAAAABJn5oKEZ0AAASlAAAAAAAAAAAAAAAAAAAEnQBQAAAAAAAEkAFAAAAAAAAAH//2Q==",
    },
    {
      title: "Virtual Study Sessions",
      src: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAswMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQcC/8QAGxABAAMBAAMAAAAAAAAAAAAAAAERMSECElH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A3EAAEqsBQAAAAAAAAAAAAAc+V1NbXIXxv1j22uqAAAAAAAAAAAAAAAAkRUcBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASQUAAAAAAAAAAAAEsFAAAAAAAAAAAAAAAAAAAABJn5oKEZ0AAASlAAAAAAAAAAAAAAAAAAAEnQBQAAAAAAAEkAFAAAAAAAAAH//2Q==",
    },
    {
        title: "Quiz Events",
        src: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAswMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQcC/8QAGxABAAMBAAMAAAAAAAAAAAAAAAERMSECElH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A3EAAEqsBQAAAAAAAAAAAAAc+V1NbXIXxv1j22uqAAAAAAAAAAAAAAAAkRUcBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASQUAAAAAAAAAAAAEsFAAAAAAAAAAAAAAAAAAAABJn5oKEZ0AAASlAAAAAAAAAAAAAAAAAAAEnQBQAAAAAAAEkAFAAAAAAAAAH//2Q==",
    },
    {
      title: "Programmers Hub",
      src: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAswMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQcC/8QAGxABAAMBAAMAAAAAAAAAAAAAAAERMSECElH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A3EAAEqsBQAAAAAAAAAAAAAc+V1NbXIXxv1j22uqAAAAAAAAAAAAAAAAkRUcBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASQUAAAAAAAAAAAAEsFAAAAAAAAAAAAAAAAAAAABJn5oKEZ0AAASlAAAAAAAAAAAAAAAAAAAEnQBQAAAAAAAEkAFAAAAAAAAAH//2Q==",
    },
    {
        title: "Gaming Zone",
        src: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAswMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQcC/8QAGxABAAMBAAMAAAAAAAAAAAAAAAERMSECElH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A3EAAEqsBQAAAAAAAAAAAAAc+V1NbXIXxv1j22uqAAAAAAAAAAAAAAAAkRUcBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASQUAAAAAAAAAAAAEsFAAAAAAAAAAAAAAAAAAAABJn5oKEZ0AAASlAAAAAAAAAAAAAAAAAAAEnQBQAAAAAAAEkAFAAAAAAAAAH//2Q==",
    },
  ];
 
  return(
    <div className="border-black rounded-xl border-2 py-6 dark:border-amber-50">
    <FocusCards cards={cards} />
    </div>
  ) 
}

export default Hero_2;