from collective.iconifieddocumentactions.interfaces import IIconifiedDocumentActionsLayer
from cpskin.core.interfaces import ICPSkinCoreLayer
from plone.app.event.interfaces import IBrowserLayer


class ICPSkinNewDreamLayer(ICPSkinCoreLayer, IIconifiedDocumentActionsLayer, IBrowserLayer):
    """
    Marker interface that defines a ZTK browser layer.
    """
