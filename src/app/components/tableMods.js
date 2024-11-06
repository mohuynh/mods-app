import Link from 'next/link';
import { Card, Row, Col } from 'react-bootstrap';
import { getModdersList } from '../services/api';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'


export default function TableMods({ ModList }) {
      const [idToNameMap, setIdToNameMap] = useState(new Map())

      useEffect(() => {
            getModdersList().then((result) => {
                  var map = new Map(result.map((e) => [e.id, e.name]))
                  setIdToNameMap(map)
            })
      }, [])

      return (
            <>
                  <Row xs={1} md={3} className="g-4">
                        {ModList.map((mod, i) => (
                              <Col key={i}>
                                    <Card key={mod.id}>
                                          <Card.Header className='bg-body-secondary'>{mod.name}</Card.Header>
                                          <Card.Body className='bg-body-tertiary'>
                                                <Card.Text>By <strong>{idToNameMap.get(mod.id_author)}</strong></Card.Text>
                                                <Card.Text>at {mod.creation_date}</Card.Text>
                                                <Link href={`/mods/${mod.id}`}><FontAwesomeIcon icon={faAnglesRight} /></Link>
                                          </Card.Body>
                                    </Card>
                              </Col>
                        ))}
                  </Row>
            </>
      );


}