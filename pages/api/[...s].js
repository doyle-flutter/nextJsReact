import {useRouter} from 'next/router'
import SApp from '../../components/sApp'

const SRoute = () => {
    const router = useRouter()
    const s = router.query.s || []
    return (
        <div>
            <SApp></SApp>
            <h2>S_Data : {s.join('/')}</h2>
        </div>
    )
}

export default SRoute