from collective.iconifieddocumentactions.interfaces import IIconifiedDocumentActionsLayer
from cpskin.core.interfaces import ICPSkinCoreLayer


class ICPSkinNewDreamLayer(ICPSkinCoreLayer, IIconifiedDocumentActionsLayer):
    """
    Marker interface that defines a ZTK browser layer.
    """
