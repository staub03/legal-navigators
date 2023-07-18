import LoadingSpin from "react-loading-spin";

export default function Loading() {
    return (
        <div className="relative mx-auto max-w-2xl py-80">
            <div className="text-center">
                <LoadingSpin
                    primaryColor="#273469"
                />
            </div>
        </div>
    )
}