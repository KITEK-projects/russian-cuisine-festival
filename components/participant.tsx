import { IParticipant } from "@/public/data/participants"

interface IParticipantProps extends IParticipant {}

export default function Participant({
    title,
    link,
    id,
    website,
    address,
    phone,
    image,
    description,
}: IParticipantProps) {
    return (
        <div
            className={`participant max-w-md flex flex-col items-center bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden ${!image ? " justify-center" : ""}`}
        >
            {image && (
                <div className="p-5 flex justify-center">
                    <img
                        src={image}
                        alt={title}
                        className="w-60 h-60 object-contain rounded-xl border border-gray-200"
                    />
                </div>
            )}

            <div className="w-full p-5 space-y-3">
                <h2 className="mt-auto text-center text-xl font-serif font-semibold hover:text-primary transition-colors items-center">
                    {link ? (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {title}
                        </a>
                    ) : (
                        title
                    )}
                </h2>

                {description && (
                    <p className="text-gray-700 text-sm text-justify leading-relaxed">
                        {description}
                    </p>
                )}

                {address && (
                    <p className="text-gray-600 text-sm">
                        <span className="font-medium text-gray-800">
                            Адрес:{" "}
                        </span>
                        {address}
                    </p>
                )}

                {website && (
                    <p className="text-gray-600 text-sm break-all">
                        <span className="font-medium text-gray-800">
                            Сайт:{" "}
                        </span>
                        <a
                            href={website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                        >
                            {website}
                        </a>
                    </p>
                )}

                {phone && (
                    <p className="text-gray-600 text-sm">
                        <span className="font-medium text-gray-800">
                            Телефон:{" "}
                        </span>
                        <a
                            href={`tel:${phone}`}
                            className="text-primary hover:underline"
                        >
                            {phone}
                        </a>
                    </p>
                )}
            </div>
        </div>
    )
}
